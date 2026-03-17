const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute -top-[10%] -right-[5%] w-[40vw] h-[40vw] bg-midnight/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-[10%] -left-[5%] w-[30vw] h-[30vw] bg-midnight/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 w-full flex items-center justify-center p-4">
                {children}
            </div>
        </div>
    )
}

export default AuthLayout