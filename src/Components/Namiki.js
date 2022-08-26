import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber/";
import { Namikijs } from "./models/Namikijs";
import { OrbitControls } from "@react-three/drei";

export function Namiki(){


    return (
<>
<div style={{ width:'100%', height:'110vh', paddingTop:'12vh' }}>
<Canvas camera={{zoom:100 , position:[45,40,120],}} >
    <ambientLight intensity={0.5}/>
    <pointLight position={[35,35,0]} intensity={0.5}/>
        <Suspense fallback={null}>
    <Namikijs/>
    </Suspense>
    <OrbitControls/>
</Canvas>
</div>
</>
    )
    
}
export default Namiki;