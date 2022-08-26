import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber/";
import { Columbisdos } from "./models/Columbisdos";
import { OrbitControls } from "@react-three/drei";

export function Columbias(){


    return (
<>
<div style={{ width:'100%', height:'110vh', paddingTop:'12vh' }}>
<Canvas camera={{zoom:5 , position:[45,40,120],}} >
    <ambientLight intensity={0.5}/>
    <pointLight position={[35,35,0]} intensity={0.5}/>
        <Suspense fallback={null}>
    <Columbisdos/>
    </Suspense>
    <OrbitControls/>
</Canvas>
</div>
</>
    )
    
}
export default Columbias;