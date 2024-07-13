from rembg import remove
from PIL import Image

input_path="4.png"
output_path="output4.png"

input_img =Image.open(input_path)
output=remove(input_img)

output.save(output_path)
