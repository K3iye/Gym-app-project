import numpy as np
import cv2 as cv
camera = cv.VideoCapture(0)
if not camera.isOpened():
    print("Cannot open camera")
    exit()
while True:
    # Frame by frame capture
    ret, frame = camera.read()
    # If frame is read correctly ret is True
    if not ret:
        print("Can't receive from (stream end?). Exiting ...")
        break
    # Operations on the frame here
    #gray = cv.cvtColor(frame, cv.COLOR_BGR2GRAY)
    # DISPLAYS the resulting frame
    cv.imshow('frame', frame)
    if cv.waitKey(1) == ord('q'):
        break
    
# When done release the capture
camera.release()
cv.destroyAllWindows()