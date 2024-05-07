from azure.cognitiveservices.vision.computervision import ComputerVisionClient
#from azure.cognitiveservices.vision.computervision.models import OperationStatusCodes
from azure.cognitiveservices.vision.computervision.models import VisualFeatureTypes
from msrest.authentication import CognitiveServicesCredentials
import os
import re

from dotenv import load_dotenv

# load .env
load_dotenv()

subscription_key = os.environ.get('VISION_KEY')
endpoint = os.environ.get('VISION_ENDPOINT')

# def load_bashrc():
#     bashrc_path = os.path.expanduser("~/.bashrc")
#     with open(bashrc_path, "r") as f:
#         lines = f.readlines()
    
#     for line in lines:
#         match = re.match(r'^\s*export\s+([A-Za-z_]+)\s*=\s*(.+)\s*', line)
#         if match:
#             key = match.group(1)
#             value = match.group(2).strip('"\'')
#             os.environ[key] = value

# load_bashrc()

#------------------------------------------------------------------------------------------------------

# Authenticate
# key, endpoint
# subscription_key = os.environ["VISION_KEY"]
# endpoint = os.environ["VISION_ENDPOINT"]
computervision_client = ComputerVisionClient(endpoint, CognitiveServicesCredentials(subscription_key))

# Quickstart variables
images_folder = os.path.join (os.path.dirname(os.path.abspath(__file__)), "images")
remote_image_url = "https://img4.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202304/07/kinolights/20230407081026931lbzg.jpg"

# tagging the image
imageTag = []
print("===== Tag an image =====")
tags_result_remote = computervision_client.tag_image(remote_image_url )

print("Tags in the remote image: ")
if (len(tags_result_remote.tags) == 0):
    print("No tags detected.")
else:
    for tag in tags_result_remote.tags:
        print("'{}' with confidence {:.2f}%".format(tag.name, tag.confidence * 100))
        imageTag.append(tag.name)

tag = imageTag[0]
