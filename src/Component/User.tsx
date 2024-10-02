
type UserProps = {
    user: {
        name: string;
        age: number;
        lang: string[];
    }
}

function User(
    { user }: UserProps
) {
    return (
        <div>
            {user.name}
            <h1>{user.age} years old</h1>
            <p style={{
                display: "flex",
                gridGap: 20
            }}>{
                user?.lang?.map((val, index) => {
                        return <span key={index}>{val}</span>
                    })
                }</p>
        </div>
    );
}

export default User;