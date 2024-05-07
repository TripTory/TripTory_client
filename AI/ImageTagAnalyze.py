from azure.cognitiveservices.vision.computervision import ComputerVisionClient
#from azure.cognitiveservices.vision.computervision.models import OperationStatusCodes
from azure.cognitiveservices.vision.computervision.models import VisualFeatureTypes
from msrest.authentication import CognitiveServicesCredentials
import os
import re

from dotenv import load_dotenv
import googletrans

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
remote_image_url = "https://gscaltexmediahub.com/wp-content/uploads/2023/05/the-day-of-ocean-2023_1.png"

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


tag_list = [
    "beach",
    "food",
    "person",
    "flower",
    "mountain",
    "sky",
    "night",
    "building",
    "animal",
    "nature",
    "skyscraper",
    "art",
    "concert",
    "tree",
    "plant",
    "river",
    "cloud",
    "car",
    "sun"
]

if len(imageTag) % 2 == 0:
    len_ = int(len(imageTag) / 2)
else:
    len_ = int(len(imageTag) / 2) + 1

ret = []
for i in range(len(imageTag[:len_])):
    for j in range(len(tag_list)):
        if imageTag[i] == tag_list[j]:
            ret.append(tag_list[j])
print(ret)

translator = googletrans.Translator()

tag_result = []
for i in ret:
    result = translator.translate(i, dest="ko")
    tag_result.append(result.text)
print(tag_result)