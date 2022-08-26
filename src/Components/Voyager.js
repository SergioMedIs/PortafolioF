import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber/";
import {Voyagerr} from './models/Voyagerr'
import { OrbitControls } from "@react-three/drei";

export function Voyager(){


    return (
<>
<div style={{ width:'100%', height:'110vh', paddingTop:'12vh' }}>
<Canvas camera={{zoom:0.5, position:[45,40,120],}} >
    <ambientLight intensity={0.5}/>
    <pointLight position={[35,210,150]} intensity={0.5}/>
        <Suspense fallback={null}>
    <Voyagerr/>
    </Suspense>
    <OrbitControls/>
</Canvas>
</div>
</>
    )
    
}
export default Voyager;