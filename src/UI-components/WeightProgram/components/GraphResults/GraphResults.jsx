
export default props => {

    return (
        <div className="line-chart" style={divStyle}>
            <Line
                data={data}
                options={options}
            />
        </div>
    )

}