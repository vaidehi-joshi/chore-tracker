'use client'

import React, { useState } from 'react'
import Profile from '@/components/profile'
import { Person, RoleAssignment } from '@/lib/types'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from 'next/navigation'


export default function Home() {
    const router = useRouter()
    const [lunchDish, setLunchDish] = useState("")
    const handleLunchDishChange = (event: any) => {
        setLunchDish(event.target.value)
    }
    const [dinnerDish, setDinnerDish] = useState("")
    const handleDinnerDishChange = (event: any) => {
        setDinnerDish(event.target.value)
    }
    const handleStart = () => {
        router.push("/cooking")
    }
    const handleSkip = () => {
        router.push("/cooking")
    }
    const roleList: RoleAssignment = {
        lunchChef: {
            name: "Kaushal", id: 1, img: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
        },
        dinnerChef: {
            name: "Kaushal", id: 1, img: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
        },
        cleaner: { name: "Kaushal", id: 1, img: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg" }
    }
    const profileList: Person[] = [
        { name: "Kaushal", id: 1, img: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg" },
        { name: "Gokul", id: 2, img: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg" },
        { name: "Moki", id: 3, img: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg" },
        { name: "Rohin", id: 4, img: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg" },
        { name: "VJ", id: 5, img: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg" }
    ]

    return (
        <div className='flex flex-col min-h-screen'>
            <div>
                <h2 className="bg-yellow-950 text-4xl font-medium leading-tight text-white text-center h-12">
                    Boomshankar
                </h2>
            </div>
            <div className='flex flex-1'>
                <div className='flex flex-col flex-1 bg-lime-200 w-full'>

                    <div>
                        <h2 className='text-4xl p-4' > Cooking </h2>
                    </ div>


                    <div className='flex flex-col h-full'>
                        <div className='flex flex-1 flex-row items-center justify-center'>
                            <div className='flex flex-1 flex-col items-center justify-center'>
                                <div>
                                    <div className='flex-1'>
                                        <Profile person={roleList.lunchChef} job="Lunch Chef" profileList={profileList} />
                                    </ div>
                                    <div className='flex flex-1 justify-center'>
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="outline">Start</Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[425px]">
                                                <DialogHeader>
                                                    <DialogTitle>What's cooking?</DialogTitle>
                                                </DialogHeader>
                                                <div className="gap-4 py-4">
                                                    <input className="col-span-3"
                                                        type="text"
                                                        id="yourInput"
                                                        value={lunchDish}
                                                        onChange={handleLunchDishChange}
                                                    />
                                                </div>

                                                <DialogFooter>
                                                    <Button type="submit" onClick={handleStart}>Save</Button>
                                                    <Button type="submit" onClick={handleSkip} variant="secondary">Skip</Button>
                                                    <DialogClose asChild>
                                                    </DialogClose>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>

                                    </div>
                                </div>

                            </div>

                            <div className='flex flex-1 flex-col p-4 items-center justify-center' >
                                <Profile className="flex-1" person={roleList.dinnerChef} job="Dinner Chef" profileList={profileList} />
                                <div className="flex-1">
                                    <Dialog >
                                        <DialogTrigger asChild>
                                            <Button variant="outline">Start</Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[425px]">
                                            <DialogHeader>
                                                <DialogTitle>What's cooking?</DialogTitle>
                                            </DialogHeader>
                                            <div className="gap-4 py-4">
                                                <input className="col-span-3"
                                                    type="text"
                                                    id="yourInput"
                                                    value={dinnerDish}
                                                    onChange={handleDinnerDishChange}
                                                />
                                            </div>

                                            <DialogFooter>
                                                <Button type="submit" onClick={handleStart}>Save</Button>
                                                <Button type="submit" onClick={handleSkip} variant="secondary">Skip</Button>
                                                <DialogClose asChild>
                                                </DialogClose>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </div>

                            </ div>
                        </ div>

                        <div className='flex flex-1'>
                            <div className='flex flex-1 p-4 items-center justify-center'>
                                <Profile person={roleList.cleaner} job="Cleaner" profileList={profileList} />
                            </ div>
                        </ div>
                    </ div>
                </div>

                <div className='flex-1 bg-purple-200 text-4xl w-full '>
                    <div>
                        <h2 className='p-4'> Grocery List </h2>
                    </ div>
                </div>

            </ div>
        </div>
    )
}

