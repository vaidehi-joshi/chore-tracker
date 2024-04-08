'use client'
import React, { useState } from 'react'

export default function Cooking() {
    const [dish, setDish] = useState("")
    return (
        <div className='flex min-h-screen'>
            <div className='flex-[1_0_0%] bg-teal-100	'>
            <pre>
Apple Watch Series 8
41mm or 45mm case
Always-On Retina LTPO OLED display, up to 1000 nits
Ion-X glass display on aluminum cases; sapphire crystal display on stainless steel cases
GPS and GPS + Cellular models
S8 SiP with 64-bit dual-core processor; W3 wireless chip; U1 chip (Ultra Wideband)25
Digital Crown with haptic feedback; Siri
Temperature sensor,5 electrical heart sensor and third-generation optical heart sensor
High and low heart rate notifications, irregular rhythm notification, and ECG app31; sleep stages
International emergency calling,8 Emergency SOS,7 Crash Detection,7 and Fall Detection
Water resistant 50 meters10
Dust resistant (IP6X)32
LTE and UMTS,12 Wi-Fi 4 (80211n), and Bluetooth 5.3
GPS/GNSS, compass, and always-on altimeter
Built-in speaker and mic
32GB capacity
Fast charge time33
</pre>
            </div>
            <div className='flex-[1_0_0%]'>
            <pre>
            Apple Watch Series 6
40mm or 44mm case
Always-On Retina LTPO OLED display, up to 1000 nits
Ion-X glass display on aluminum cases; sapphire crystal display on stainless steel and titanium cases
GPS and GPS + Cellular models
S6 SiP with 64-bit dual-core processor; W3 wireless chip; U1 chip (Ultra Wideband)25
Digital Crown with haptic feedback
Electrical heart sensor and third-generation optical heart sensor
High and low heart rate notifications, irregular rhythm notification, and ECG app31; sleep stages
International emergency calling ,8 Emergency SOS,7 and Fall Detection
Water resistant 50 meters10
LTE and UMTS,12 Wi-Fi, and Bluetooth 5.0
GPS/GNSS, compass, and always-on altimeter
Built-in speaker and mic
32GB capacity

            </pre>

            </div>
        </div>
    )
}
