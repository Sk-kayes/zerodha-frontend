import TableOne from "./tables/TableOne"
import TableThree from "./tables/TableThree"
import TableTwo from "./tables/TableTwo"

const Brokerage = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 space-y-6">
            <TableOne />
            <TableTwo />
            <TableThree />
        </div>
    )
}

export default Brokerage
