import Card from "../Elements/Card";
import Housing from "../../assets/icons/Housing.svg";
import Food from "../../assets/icons/Food.svg";
import Transport from "../../assets/icons/Trasnport.svg";
import Entertainment from "../../assets/icons/Movie.svg";
import Shopping from "../../assets/icons/Shopping.svg";
import Others from "../../assets/icons/Others.svg";

const iconMap = {
  Housing,
  Food,
  Transportation: Transport,
  Entertainment,
  Shopping,
  Others,
};

function CardExpenseBreakdown({ data = [] }) {
  return (
    <Card
      title="Expenses Comparison"
      desc={
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => {
            const Icon = iconMap[item.category] || Others;

            return (
              <div 
                key={item.id} 
                className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm"
              >
                {/* Bagian Atas: Header Kategori */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-100 p-3 rounded-xl">
                      <img
                        src={Icon}
                        alt={item.category}
                        className="w-6 h-6 opacity-70"
                      />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium">
                        {item.category}
                      </p>
                      <p className="font-bold text-xl text-gray-800">
                        ${item.amount}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <p className={`text-sm font-bold ${item.status === "up" ? "text-red-500" : "text-green-500"}`}>
                        {item.percentage}%
                      </p>
                      <span className={item.status === "up" ? "text-red-500" : "text-green-500"}>
                        {item.status === "up" ? "↑" : "↓"}
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-1">
                      Compare to the last month
                    </p>
                  </div>
                </div>

                <hr className="border-gray-50 mb-5" />

                {/* Bagian Bawah: List Transaksi Detail */}
                <div className="space-y-5">
                  {item.items && item.items.map((subItem) => (
                    <div key={subItem.id} className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-bold text-gray-700">
                          {subItem.name}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {subItem.date}
                        </p>
                      </div>
                      <p className="text-sm font-bold text-gray-800">
                        ${subItem.amount}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      }
    />
  );
}

export default CardExpenseBreakdown;