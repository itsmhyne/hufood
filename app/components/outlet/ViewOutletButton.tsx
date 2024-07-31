'use client'

export const ViewOutletButton = () => {

    const handleClick = () => {
        console.log('accu di klik');

    }

    return (
        <>
            <button className="bg-sky-500 py-2 px-5 rounded-lg" onClick={handleClick}>Lihat Outlet</button >
        </>
    )
}
