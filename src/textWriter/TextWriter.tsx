function TextWriter() {
    return (
        <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
         />
     );

}

export default TextWriter