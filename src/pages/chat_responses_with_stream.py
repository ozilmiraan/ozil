from google import genai
from google.genai.types import HttpOptions, Part

import argparse

import vertexai
from vertexai.preview.vision_models import ImageGenerationModel

import logging
from google.cloud import logging as gcp_logging



PROJECT_ID = "your-project-id"       # Replace with your project ID
LOCATION = "your-region" 

def generate_bouquet_image(
    project_id: str, location: str, output_file: str, prompt: str
) -> vertexai.preview.vision_models.ImageGenerationResponse:
    """Generate an image using a text prompt.
    Args:
      project_id: Google Cloud project ID, used to initialize Vertex AI.
      location: Google Cloud region, used to initialize Vertex AI.
      output_file: Local path to the output image file.
      prompt: The text prompt describing what you want to see."""

    vertexai.init(project=project_id, location=location)

    model = ImageGenerationModel.from_pretrained("imagen-3.0-generate-002")

    images = model.generate_images(
        prompt=prompt,
        # Optional parameters
        number_of_images=1,
        seed=1,
        add_watermark=False,    
    )
    output_file = "bouquet_image.jpeg"
    images[0].save(location=output_file)

    return images


# ------  Below cloud logging code is for Qwiklab's internal use, do not edit/remove it. --------
# Initialize GCP logging
def analyze_bouquet_image(image_path: str):
    gcp_logging_client = gcp_logging.Client()
    gcp_logging_client.setup_logging()

    client = genai.Client(
        vertexai=True,
        project='"project-id"',
        location='"REGION"',
        http_options=HttpOptions(api_version="v1")
    )
    chat = client.chats.create(model="gemini-2.0-flash-001")

   

    response_text =""

    for chunk in chat.send_message_stream(client.models.generate_content(
    model="gemini-2.0-flash-001",
    contents=[
        "Generate birthday wishes based on the image passed.",
        Part.from_uri(
            file_uri=image_path,
            mime_type="image/jpeg",
        ),
    ],
)):


        response_text += chunk.text

    return response_text

if __name__ == "__main__":
    prompt = "Create an image containing a bouquet of 2 sunflowers and 3 roses"
    image_path = generate_bouquet_image(prompt)
    analyze_bouquet_image(image_path)