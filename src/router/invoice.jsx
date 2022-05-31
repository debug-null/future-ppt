import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";

export default function Invoice() {
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));

  let navigate = useNavigate();
  let location = useLocation();

  return (
    <main style={{ padding: "1rem" }}>
      {invoice ? (
        <div>
          <h2>Total Due: {invoice.amount}</h2>
          <p>
            {invoice.name}: {invoice.number}
          </p>
          <p>Due Date: {invoice.due}</p>

          <p>
            <button
              onClick={() => {
                deleteInvoice(invoice.number);
                navigate("/invoices" + location.search);
              }}
            >
              delete
            </button>
          </p>
        </div>
      ) : (
        "未匹配到数据"
      )}
    </main>
  );
}
