import { useState, useEffect } from "react";
import Navbar from "../../Components/Navabar/Navbar";
import { getBudgetAPI, saveBudgetAPI } from "../../Service/allAPIs"; // adjust path
import "./BudgetPlanner.css";
import heroImg from "../../assets/CSP08749 2.JPG";
import Footer from "../../Components/Footer/Footer";


function BudgetPlanner() {
  const [budgetData, setBudgetData] = useState([
    {
      category: "Entertainment",
      items: [{ title: "Band", cost: 0 }],
    },
    {
      category: "Beauty & Health",
      items: [
        { title: "Hair & Makeup", cost: 0 },
        { title: "Prewedding Pampering", cost: 0 },
      ],
    },
    {
      category: "Cake",
      items: [{ title: "Cake & Cutting Fee", cost: 0 }],
    },
  ]);

  const [loading, setLoading] = useState(true);

  // 🔥 LOAD USER BUDGET FROM DB
  useEffect(() => {
    const fetchBudget = async () => {
      try {
        const res = await getBudgetAPI();

        if (res.data) {
          setBudgetData(res.data.categories);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBudget();
  }, []);

  // 🔥 UPDATE ITEM
  const handleItemChange = (catIndex, itemIndex, field, value) => {
    const updatedData = [...budgetData];
    updatedData[catIndex].items[itemIndex][field] = value;
    setBudgetData(updatedData);
  };

  // 🔥 ADD NEW ITEM
  const addNewItem = (catIndex) => {
    const updatedData = [...budgetData];
    updatedData[catIndex].items.push({ title: "", cost: 0 });
    setBudgetData(updatedData);
  };

  // 🔥 SAVE BUDGET
  const saveBudget = async () => {
    try {
      await saveBudgetAPI({ categories: budgetData });
      alert("Budget saved successfully ✅");
    } catch (error) {
      alert("Failed to save budget ❌");
    }
  };

  // 🔥 TOTAL CALCULATION
  const totalBudget = budgetData.reduce(
    (sum, cat) =>
      sum +
      cat.items.reduce(
        (itemSum, item) => itemSum + Number(item.cost || 0),
        0
      ),
    0
  );

  return (
    <>
      <Navbar />
{/* HERO SECTION */}
<section
  className="budget-hero"
  style={{ backgroundImage: `url(${heroImg})` }}
>
  <div className="budget-hero-overlay">
    <h1>Wedding Budget Planner</h1>
    <p>Plan Smart. Spend Wise. Celebrate Big.</p>
  </div>
</section>


      <section className="budget-page">
        <h1>Wedding Budget Planner</h1>

        <p className="budget-desc">
          Add items, track expenses, and manage your wedding budget smartly.
        </p>

        {/* 🔥 TOTAL */}
        <div className="budget-header">
          <h2>
            Budget <span>₹ {totalBudget.toLocaleString()}</span>
          </h2>
        </div>

        {/* 🔥 BUDGET BOX */}
        <div className="budget-box">
          {loading && <p>Loading...</p>}

          {!loading &&
            budgetData.map((category, catIndex) => (
              <div className="budget-category" key={catIndex}>
                <h3>{category.category}</h3>

                {category.items.map((item, itemIndex) => (
                  <div className="budget-item" key={itemIndex}>
                    <input
                      type="text"
                      placeholder="Item name"
                      value={item.title}
                      onChange={(e) =>
                        handleItemChange(
                          catIndex,
                          itemIndex,
                          "title",
                          e.target.value
                        )
                      }
                    />

                    <input
                      type="number"
                      placeholder="₹ Cost"
                      value={item.cost}
                      onChange={(e) =>
                        handleItemChange(
                          catIndex,
                          itemIndex,
                          "cost",
                          e.target.value
                        )
                      }
                    />
                  </div>
                ))}

                <button
                  className="add-item-btn"
                  onClick={() => addNewItem(catIndex)}
                >
                  + Add new item
                </button>
              </div>
            ))}
        </div>

        {/* 🔥 SAVE BUTTON */}
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <button className="save-budget-btn" onClick={saveBudget}>
            Save Budget
          </button>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default BudgetPlanner;
