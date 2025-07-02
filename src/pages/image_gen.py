import argparse

import vertexai
from vertexai.preview.vision_models import ImageGenerationModel

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

    images[0].save(location=output_file)

    return images

generate_bouquet_image(
    project_id='"project-id"',
    location='"REGION"',
    output_file='image.jpeg',
    prompt='Create an image containing a bouquet of 2 sunflowers and 3 roses',
    )
# =========================================================
import vertexai
from vertexai.generative_models import GenerativeModel, Part

def generate_text(project_id: str, location: str) -> str:
  # Initialize Vertex AI
  vertexai.init(project=project_id, location=location)
  # Load the model
  multimodal_model = GenerativeModel("gemini-2.0-flash-001")
  # Query the model
  response = multimodal_model.generate_content(
    [
      # Add an example image
      Part.from_uri(
        "gs://generativeai-downloads/images/scones.jpg", mime_type="image/jpeg"
      ),
      # Add an example query
      "what is shown in this image?",
    ]
  )

  return response.text

project_id = "$ID"
location = "$REGION"

response = generate_text(project_id, location)
print(response)

# +++++++++++++++++++++++++++++++++++++++++++++++++++
from vertexai.preview.generative_models import GenerativeModel, Part
import vertexai

def analyze_bouquet_image(image_path):
    vertexai.init(project="your-project-id", location="your-region")

    model = GenerativeModel("gemini-2.0-flash-001")  # or gemini-1.0-pro-vision

    responses = model.generate_content(
        [
            "Generate birthday wishes based on the image passed.",
            Part.from_uri(file_uri=image_path, mime_type="image/jpeg"),
        ],
        stream=True,
    )

    full_response = ""
    for chunk in responses:
        print(chunk.text, end="")
        full_response += chunk.text

    return full_response

print(analyze_bouquet_image("gs://cloud-samples-data/generative-ai/image/scones.jpg"))


# Main
if __name__ == "__main__":
    prompt = "Create an image containing a bouquet of 2 sunflowers and 3 roses"
    output_file = "bouquet_image.jpeg"

    image_path = generate_bouquet_image(PROJECT_ID, LOCATION, output_file, prompt)
    gcs_uri = upload_to_gcs(image_path, cloud-samples-data)
    analyze_bouquet_image(gcs_uri)
# +++++++++++++++++++++++++++++++++++++++++++++++
from google import genai
from google.genai.types import HttpOptions, Part
import logging
from google.cloud import logging as gcp_logging


# Analyze the image using Gemini
def analyze_bouquet_image(gcs_uri):
    # Qwiklabs logging
    gcp_logging_client = gcp_logging.Client()
    gcp_logging_client.setup_logging()

    client = genai.Client(
        vertexai=True,
        project='"project-id"',
        location='"REGION"',
        http_options=HttpOptions(api_version="v1")
    )
    chat = client.chats.create(model="gemini-2.0-flash-001")

    response_text = ""
    for chunk in chat.send_message_stream([
        "Generate birthday wishes based on the image passed.",
        Part.from_uri(file_uri=gcs_uri, mime_type="image/jpeg")
    ]):
        print(chunk.text, end="")
        response_text += chunk.text
    print("\n\nDone.")
    return response_text

# +======================================================================
from google import genai
from google.genai.types import HttpOptions, Part
import logging
from google.cloud import logging as gcp_logging


# Analyze the image using Gemini
def analyze_bouquet_image(image_path):
    # Qwiklabs logging
    gcp_logging_client = gcp_logging.Client()
    gcp_logging_client.setup_logging()

    client = genai.Client(
        vertexai=True,
        project='"project-id"',
        location='"REGION"',
        http_options=HttpOptions(api_version="v1")
    )
    chat = client.chats.create(model="gemini-2.0-flash-001")

    response_text = ""
    for chunk in chat.send_message_stream([
        "Generate birthday wishes based on the image passed.",
        Part.from_uri(file_uri=image_path, mime_type="image/jpeg")
    ]):
        print(chunk.text, end="")
        response_text += chunk.text
    print("\n\nDone.")
    return response_text

analyze_bouquet_image("https://zrjljkqjluhqpweii2xwbzf27kmltpja6akwnf6fy72ykkn5qhcq.us-central1-b.resources.bumper-boats-00.services.qwiklabs.com/mini-browser/home/student/image.jpeg")