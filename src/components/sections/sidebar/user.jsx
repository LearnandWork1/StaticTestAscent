import React from 'react'
import Image from 'next/image'
import SocalIcons from '../../ui/socalIcons'

const User = () => {
    return (
        <div className="bg-background shadow-3xl xl:p-10 p-5 rounded-md">
            <Image src={'/images/blog/user.png'} width={120} height={120} alt="user img" />
            <div className="pt-5">
                <h4 className="lg:text-2xl text-xl font-semibold lg:leading-[140%]">Nafiz Bhuiyan</h4>
                <p className="lg:mt-[18px] mt-2.5">It is a long established fact that a reader will be distracted by the read content of a page when looking at its layout</p>
                <SocalIcons prentClassNaclassName={"gap-5 lg:pt-7.5 pt-5"} className={"w-9 h-9 hover:bg-green"} />
            </div>
        </div>
    )
}

export default User