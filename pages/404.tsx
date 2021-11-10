import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

export default function Custom404() {

    const router = useRouter();

    useEffect(() => {
        
        setTimeout(() => {
            router.push('/');
        }, 3000);
        
    }, [])

    return (
        <div style={{ color: 'darkgray',textAlign: 'center' }}>
            Oppps <br />
            Halaman yang anda cari tidak ditemukan
        </div>
    )
}