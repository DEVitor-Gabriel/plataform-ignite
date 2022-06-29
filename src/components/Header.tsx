import { Logo } from "./Logo";

export function Header(){
    return(
        <header className={`
            flex items-center justify-center w-full
            bg-gray-700
            py-5
            border-b border-gray-600

        `}>
            <Logo/>
        </header>
    )
}