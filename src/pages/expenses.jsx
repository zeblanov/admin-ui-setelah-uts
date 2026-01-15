import React, { useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CircularProgress from "@mui/material/CircularProgress";
import CardExpenseBreakdown from "../components/Fragments/CardExpenseBreakdown";

const ExpensesPage = () => {
  const [loading, setLoading] = useState(true);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setExpenses([
        {
          id: 1,
          category: "Housing",
          amount: 250,
          percentage: 15,
          status: "up",
          items: [
            { id: 101, name: "House Rent", amount: 230, date: "17 May 2023" },
            { id: 102, name: "Parking", amount: 20, date: "17 May 2023" },
          ],
        },
        {
          id: 2,
          category: "Food",
          amount: 350,
          percentage: 8,
          status: "down",
          items: [
            { id: 201, name: "Grocery", amount: 230, date: "17 May 2023" },
            { id: 202, name: "Restaurant Bill", amount: 120, date: "17 May 2023" },
          ],
        },
        {
          id: 3,
          category: "Transportation",
          amount: 50,
          percentage: 12,
          status: "down",
          items: [
            { id: 301, name: "Taxi Fare", amount: 30, date: "17 May 2023" },
            { id: 302, name: "Metro Card Bill", amount: 20, date: "17 May 2023" },
          ],
        },
        {
          id: 4,
          category: "Entertainment",
          amount: 80,
          percentage: 15,
          status: "down",
          items: [
            { id: 401, name: "Movie Ticket", amount: 30, date: "17 May 2023" },
            { id: 402, name: "iTunes", amount: 50, date: "17 May 2023" },
          ],
        },
        {
          id: 5,
          category: "Shopping",
          amount: 420,
          percentage: 25,
          status: "up",
          items: [
            { id: 501, name: "Shirt", amount: 230, date: "17 May 2023" },
            { id: 502, name: "Jeans", amount: 190, date: "17 May 2023" },
          ],
        },
        {
          id: 6,
          category: "Others",
          amount: 50,
          percentage: 23,
          status: "up",
          items: [
            { id: 601, name: "Donation", amount: 30, date: "17 May 2023" },
            { id: 602, name: "Gift", amount: 20, date: "17 May 2023" },
          ],
        },
      ]);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <MainLayout title="Expenses">
      {loading ? (
        <div className="flex flex-col items-center justify-center h-[50vh]">
          <CircularProgress />
          <p className="mt-3 text-sm text-gray-500">Loading expenses...</p>
        </div>
      ) : (
        <CardExpenseBreakdown data={expenses} />
      )}
    </MainLayout>
  );
};

export default ExpensesPage;