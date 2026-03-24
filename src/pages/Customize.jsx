import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Customize() {
    const navigate = useNavigate();

    const [selectedScents, setSelectedScents] = useState([]);
    const [selectedTexture, setSelectedTexture] = useState("");
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [addedToCart, setAddedToCart] = useState(false);

    const scents = ["Lavender", "Sakura", "Coconut", "Unscented", "Rose", "Honey"];
    const textures = ["Smooth", "Scrub"];
    const ingredients = ["xxxxx", "xxxxx", "Sugar", "Other stuff", "Milk", "Love"];

    const toggleMultiSelect = (value, selectedValues, setSelectedValues) => {
        if (selectedValues.includes(value)) {
            setSelectedValues(selectedValues.filter((item) => item !== value));
        } else {
            setSelectedValues([...selectedValues, value]);
        }
        setAddedToCart(false);
    };

    const handleTextureChange = (texture) => {
        setSelectedTexture(texture);
        setAddedToCart(false);
    };

    const isValid = selectedScents.length > 0 && selectedTexture !== "";
    const price = 7.0;

    const handleAddToCart = () => {
        if (!isValid) {
            setAddedToCart(false);
            return;
        }

        setAddedToCart(true);
    };

    return (
        <div
            className="purple-page"
            style={{
                minHeight: "100vh",
                padding: "55px 50px",
                boxSizing: "border-box",
            }}
        >
            <button
                onClick={() => navigate(-1)}
                style={{
                    padding: "14px 34px",
                    borderRadius: "25px",
                    border: "1px solid rgba(255,255,255,0.35)",
                    background: "rgba(255,255,255,0.10)",
                    backdropFilter: "blur(12px)",
                    color: "#3b3b3b",
                    fontSize: "16px",
                    fontFamily: "Josefin Sans, sans-serif",
                    cursor: "pointer",
                    marginBottom: "20px",
                    position: "relative",
                    zIndex: 2,
                }}
            >
                ← Back
            </button>

            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.28)",
                    borderRadius: "30px",
                    padding: "20px 26px",
                    minHeight: "470px",
                    display: "flex",
                    gap: "18px",
                    backdropFilter: "blur(14px)",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        gap: "14px",
                        alignItems: "flex-start",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                        }}
                    >
                        <div
                            style={{
                                width: "200px",
                                background: "rgba(255,255,255,0.28)",
                                borderRadius: "14px",
                                padding: "18px",
                            }}
                        >
                            <h3
                                style={{
                                    marginTop: 0,
                                    marginBottom: "14px",
                                    fontSize: "18px",
                                    color: "#333",
                                }}
                            >
                                Scent
                            </h3>

                            {scents.map((scent) => (
                                <label
                                    key={scent}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        marginBottom: "14px",
                                        fontSize: "15px",
                                        color: "#444",
                                        cursor: "pointer",
                                    }}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedScents.includes(scent)}
                                        onChange={() =>
                                            toggleMultiSelect(
                                                scent,
                                                selectedScents,
                                                setSelectedScents
                                            )
                                        }
                                    />
                                    {scent}
                                </label>
                            ))}
                        </div>

                        <div
                            style={{
                                width: "200px",
                                background: "rgba(255,255,255,0.28)",
                                borderRadius: "14px",
                                padding: "18px",
                            }}
                        >
                            <h3
                                style={{
                                    marginTop: 0,
                                    marginBottom: "14px",
                                    fontSize: "18px",
                                    color: "#333",
                                }}
                            >
                                Texture
                            </h3>

                            {textures.map((texture) => (
                                <label
                                    key={texture}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        marginBottom: "16px",
                                        fontSize: "15px",
                                        color: "#444",
                                        cursor: "pointer",
                                    }}
                                >
                                    <input
                                        type="radio"
                                        name="texture"
                                        checked={selectedTexture === texture}
                                        onChange={() => handleTextureChange(texture)}
                                    />
                                    {texture}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div
                        style={{
                            width: "210px",
                            minHeight: "300px",
                            background: "rgba(255,255,255,0.28)",
                            borderRadius: "14px",
                            padding: "18px",
                        }}
                    >
                        <h3
                            style={{
                                marginTop: 0,
                                marginBottom: "14px",
                                fontSize: "18px",
                                color: "#333",
                            }}
                        >
                            Ingredients
                        </h3>

                        {ingredients.map((ingredient, index) => (
                            <label
                                key={`${ingredient}-${index}`}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    marginBottom: "16px",
                                    fontSize: "15px",
                                    color: "#444",
                                    cursor: "pointer",
                                }}
                            >
                                <input
                                    type="checkbox"
                                    checked={selectedIngredients.includes(`${ingredient}-${index}`)}
                                    onChange={() =>
                                        toggleMultiSelect(
                                            `${ingredient}-${index}`,
                                            selectedIngredients,
                                            setSelectedIngredients
                                        )
                                    }
                                />
                                {ingredient}
                            </label>
                        ))}
                    </div>
                </div>

                <div
                    style={{
                        flex: 1,
                        position: "relative",
                        minHeight: "420px",
                    }}
                >
                    {!isValid && (
                        <p
                            style={{
                                color: "#ff5a45",
                                fontSize: "22px",
                                fontWeight: "500",
                                textAlign: "center",
                                marginTop: "160px",
                            }}
                        >
                            Please select all required options
                        </p>
                    )}

                    <div
                        style={{
                            position: "absolute",
                            right: "0",
                            bottom: "110px",
                            width: "145px",
                            padding: "16px 18px",
                            borderRadius: "999px",
                            background: "rgba(255,255,255,0.16)",
                            border: "1px solid rgba(255,255,255,0.35)",
                            textAlign: "center",
                            color: "#444",
                            fontWeight: "700",
                            fontSize: "16px",
                        }}
                    >
                        Price: ${price.toFixed(2)}
                    </div>

                    <div
                        style={{
                            position: "absolute",
                            right: "0",
                            bottom: "12px",
                            display: "flex",
                            alignItems: "center",
                            gap: "14px",
                        }}
                    >
                        {addedToCart && isValid && (
                            <p
                                style={{
                                    color: "#39a86f",
                                    fontSize: "16px",
                                    fontWeight: "600",
                                    margin: 0,
                                    whiteSpace: "nowrap",
                                    transform: "translateY(-4px)",
                                }}
                            >
                                Customized product added to cart
                            </p>
                        )}

                        <div
                            style={{
                                width: "160px",
                                padding: "16px",
                                borderRadius: "24px",
                                background: "rgba(255,255,255,0.12)",
                                border: "1px solid rgba(255,255,255,0.30)",
                            }}
                        >
                            <Button
                                text="Add to Cart"
                                variant={isValid ? "purple" : "purpleDisabled"}
                                disabled={!isValid}
                                style={{ width: "100%" }}
                                onClick={handleAddToCart}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Customize;