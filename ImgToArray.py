from PIL import Image
from PIL import ImageOps
import numpy as np

bwImage = Image.open("basement2.png")   
threshold = 150
bwImage = bwImage.point(lambda p: p > threshold and 255)
bwImage = bwImage.convert(mode="1", dither=Image.NONE)
bwImage = bwImage.resize((bwImage.width//10, bwImage.height//10),  Image.LANCZOS)
bwImage = ImageOps.invert(bwImage)
bwImage.save('test.png')
array = np.array(bwImage, dtype=np.uint8)

#print(array)

f = open("output.txt", 'w')
f.write('[')
for x in array:
    f.write('[')
    for y in x:
        f.write(str(y) + ',')
    f.write('],')
    
f.write(']')
f.close()