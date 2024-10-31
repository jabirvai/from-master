

const Simpleform = () => {
    e.preventDefault();
    console.log(e.target);
    const handleSubmit  = e =>{
        console.log('from submitted');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" />
                <br />
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
};

export default Simpleform;