from PIL import Image
import numpy as np

bwImage = Image.open("basement2.png")   
bwImage = bwImage.convert(mode="1", dither=Image.NONE)
array = np.array(bwImage, dtype=np.uint8)

#print(array)

f = open("output.txt", 'w')
f.write('[')
for x in array:
    f.write('[')
    for y in x:
        f.write(str(y) + ',')
    f.write(']')
    
f.write(']')
f.close()