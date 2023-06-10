from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MODEL = tf.keras.models.load_model("./saved_models/2")

CLASS_NAMES = ['Boat Pose',
 'Bow Pose',
 'Butterfly Pose',
 'Cat-Cow Pose',
 'Cow Face Pose',
 'Crane Pose',
 'Crescent Moon Pose',
 'Downward-Facing Dog Pose',
 'Extended Hand-To-Big-Toe Pose',
 'Firefly Pose',
 'Flip Dog Pose',
 'Formidable Pose',
 'Garland Pose',
 'Half Moon Pose',
 'Intense Half Stretch Pose',
 'Inverted Staff Pose',
 'Lion Pose',
 'Monkey Pose',
 'Noose Pose',
 'Revolved Triangle Pose',
 'Shoulder Pressing Pose',
 'Side Plank Pose',
 'Sleeping Vishnu Pose',
 'Staff Pose',
 'Supported Bridge Pose',
 'Tree Pose',
 'Upward Bow Pose',
 'Upward Facing Dog Pose',
 'Warrior Pose',
 'Warrior Pose II',
 'Wide-Legged Standing Forward Bend Pose',
 'Yogic Sleep Pose']

@app.get("/ping")
async def ping():
    return "Hello, I am alive"

def read_file_as_image(data) -> np.ndarray:
    image = np.array(Image.open(BytesIO(data)))
    return image

@app.post("/predict")
async def predict(
    file: UploadFile = File(...)
):
    image = read_file_as_image(await file.read())
    img_batch = np.expand_dims(image, 0)
    
    predictions = MODEL.predict(img_batch)
    # predictions = MODEL.predict(image)

    predicted_class = CLASS_NAMES[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])
    return {
        'class': predicted_class,
        'confidence': float(confidence)
    }

if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=8000)

