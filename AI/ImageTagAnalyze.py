from azure.cognitiveservices.vision.computervision import ComputerVisionClient
#from azure.cognitiveservices.vision.computervision.models import OperationStatusCodes
from azure.cognitiveservices.vision.computervision.models import VisualFeatureTypes
from msrest.authentication import CognitiveServicesCredentials
import os
import re

def load_bashrc():
    bashrc_path = os.path.expanduser("~/.bashrc")
    with open(bashrc_path, "r") as f:
        lines = f.readlines()
    
    for line in lines:
        match = re.match(r'^\s*export\s+([A-Za-z_]+)\s*=\s*(.+)\s*', line)
        if match:
            key = match.group(1)
            value = match.group(2).strip('"\'')
            os.environ[key] = value

load_bashrc()

#------------------------------------------------------------------------------------------------------

# Authenticate
# key, endpoint
subscription_key = os.environ["VISION_KEY"]
endpoint = os.environ["VISION_ENDPOINT"]
computervision_client = ComputerVisionClient(endpoint, CognitiveServicesCredentials(subscription_key))

# Quickstart variables
images_folder = os.path.join (os.path.dirname(os.path.abspath(__file__)), "images")
# remote_image_url = "https://raw.githubusercontent.com/Azure-Samples/cognitive-services-sample-data-files/master/ComputerVision/Images/landmark.jpg"
remote_image_url = "https://media.istockphoto.com/id/1915475779/ko/%EC%82%AC%EC%A7%84/pink-cherry-blossom.jpg?s=1024x1024&w=is&k=20&c=AQHjiXu5_xNJOqr4W-eSHVzf7Mlva6SoAJtF_E8RMUE="

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
