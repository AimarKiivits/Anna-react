function TextBox() {

    return (
        <div className="text-box">
            <form action="">                    
                <div>
                    <label for="textarea">Sõnum</label>
                    <br/>
                    <textarea id="textarea" cols="40" rows="5"></textarea>
                </div>
                <br/>
                <div>
                    <input type="submit" value="Saada vorm!"/>
                </div>
            </form>
        </div>
    )
} 

export default TextBox