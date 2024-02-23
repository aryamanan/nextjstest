const AuthLayout: React.FC=({
    children
}: {
    children?: React.ReactNode
})=>{
    return (
        <div>
            {children}
        </div>
    )
}

export default AuthLayout;