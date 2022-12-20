export default function Actions({onMirroredClicked, onGrayScaleClicked, onRotationClicked}){
    return (
        <div>
            <button onClick={onRotationClicked}>Rotate</button>
            <button onClick={onGrayScaleClicked}>Grayscale</button>
            <button onClick={onMirroredClicked}>Mirror</button>
        </div>
    );
}