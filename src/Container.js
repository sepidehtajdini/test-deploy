import Actions from "./Actions";
import "./container.css";
import {useState} from 'react';

export default function Container(){
    const [isMirrored, setIsMirrored] = useState(false);
    const [isGrayScaled, setIsGrayScaled] = useState(false);
    const [rotationCount, setRotationCount] = useState(0);

    function handleMirrorClick(){
        setIsMirrored(!isMirrored);
    }

    function handleGrayScaleClicked(){
        setIsGrayScaled(!isGrayScaled);
    }

    function handleRotationClicked(){
        setRotationCount(rotationCount + 1)
    }

    const mirrorClassName = isMirrored ? 'mirror' : '';
    const grayScaleClassName = isGrayScaled ? 'grayscale' : ''
    const degValue = rotationCount * 90;

    return (
        <div>
            <img style={
                {
                   transform: `rotate(${degValue}deg)` 
                }
            } className={`image ${mirrorClassName} ${grayScaleClassName}`} src="/flower.webp" />

            <div>
                <Actions onRotationClicked={handleRotationClicked} onMirroredClicked={handleMirrorClick} onGrayScaleClicked={handleGrayScaleClicked} />
            </div>
        </div>
    );
}