import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({variable:"--font-geist-sans",subsets:["latin"]});
const geistMono = Geist_Mono({variable:"--font-geist-mono",subsets:["latin"]});
export const metadata: Metadata = {metadataBase:new URL("https://humanitywins.world"),title:{default:"HUMANITY WINS — 21 Languages. One Message.",template:"%s · Humanity Wins"},description:"A global peace music project: one song in 21 languages, released worldwide on 31 August 2026.",alternates:{canonical:"/"},openGraph:{title:"HUMANITY WINS — 21 Languages. One Message.",description:"One song against war. 21 languages. Worldwide release on 31 August 2026.",url:"https://humanitywins.world",siteName:"Humanity Wins",images:[{url:"/world-cover.png",width:1200,height:1200,alt:"Imagine Humanity Wins — World Edition"}],type:"website"},twitter:{card:"summary_large_image",title:"HUMANITY WINS",description:"One song against war. 21 languages. One message.",images:["/world-cover.png"]},icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="de"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>}
