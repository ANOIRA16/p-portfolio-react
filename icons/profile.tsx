import { FC } from "react"
import Image from 'next/image'

interface ProfileIconAttributes {
  className?: string
}

const ProfileIcon: FC<ProfileIconAttributes> = ({
  className = "",
}: ProfileIconAttributes) => {
  return (
    <div className={`rounded-full overflow-hidden ${className}`} style={{ width: 44, height: 44 }}>
      <Image
        src="/images/authors/abdelhamid.jpg"
        alt="Profile Image"
        width={44}
        height={44}
      />
    </div>
  )  
}

export default ProfileIcon
