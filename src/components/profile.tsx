import { useState } from 'react'
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
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Person, RoleAssignment } from '@/lib/types'

const Profile = (props: any) => {
  const profileList: Person[] = props.profileList
  const [person, setPersonClicked] = useState(props.person);
  const onChange = (p: Person) => {
    // console.log("OnChange called changed person set to",p)
    setPersonClicked(p)
  }


  return (

    <div className="w-24">
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <div className='flex justify-center flex-col'>
              <div className="flex flex-1 justify-center ">
                <Avatar>
                  <AvatarImage src={person.img} alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className='flex-1 justify-center items-cente w-full'>
                <h5 className="flex mb-4 text-xl font-semibold justify-center">{person.name}</h5>
                <h6 className="flex mb-4 font-semibold text-primary dark:text-primary-500 justify-center">
                  {props.job}
                </h6>
              </div>
            </ div>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[640px]">
            <DialogHeader>
              <DialogTitle>Change profile</DialogTitle>
              <DialogDescription>
                Select your profile here
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center gap-2 py-4 justify-evenly">
              {profileList.map((person: Person) => (
                <div key={person.id} className="flex flex-col gap-4" onClick={() => onChange(person)}>
                  <Avatar className='mr-2'>
                    <AvatarImage src={person.img} alt={`@${person.name}`} />
                    <AvatarFallback>{person.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="mb-4 text-xl font-semibold">{person.name}</div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </ div>
    </div>


  )
}

export default Profile