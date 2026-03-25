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

    const isMobile = window.innerWidth <= 768;
    const isLoggedIn = false;

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

        if (!isLoggedIn) {
            alert("Please login first");
            return;
        }

        setAddedToCart(true);
    };

    return (
        <div
            className="purple-page"
            style={{
                minHeight: "100vh",
                padding: isMobile ? "24px 16px 140px" : "55px 50px",
                boxSizing: "border-box",
            }}
        >
            <button
                onClick={() => navigate(-1)}
                style={{
                    padding: isMobile ? "12px 24px" : "14px 34px",
                    borderRadius: "25px",
                    border: "1px solid rgba(255,255,255,0.35)",
                    background: "rgba(255,255,255,0.10)",
                    backdropFilter: "blur(12px)",
                    color: "#3b3b3b",
                    fontSize: isMobile ? "15px" : "16px",
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
                    padding: isMobile ? "18px 14px" : "20px 26px",
                    minHeight: isMobile ? "auto" : "470px",
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    gap: "18px",
                    flexWrap: "wrap",
                    backdropFilter: "blur(14px)",
                    overflowX: "hidden",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        gap: "14px",
                        alignItems: "flex-start",
                        width: isMobile ? "100%" : "auto",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            width: isMobile ? "100%" : "auto",
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                maxWidth: isMobile ? "100%" : "220px",
                                background: "rgba(255,255,255,0.28)",
                                borderRadius: "14px",
                                padding: "18px",
                                boxSizing: "border-box",
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
                                width: "100%",
                                maxWidth: isMobile ? "100%" : "220px",
                                background: "rgba(255,255,255,0.28)",
                                borderRadius: "14px",
                                padding: "18px",
                                boxSizing: "border-box",
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
                            width: "100%",
                            maxWidth: isMobile ? "100%" : "220px",
                            minHeight: "300px",
                            background: "rgba(255,255,255,0.28)",
                            borderRadius: "14px",
                            padding: "18px",
                            boxSizing: "border-box",
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
                        minHeight: isMobile ? "auto" : "420px",
                        display: "flex",
                        flexDirection: "column",
                        width: isMobile ? "100%" : "auto",
                    }}
                >
                    {!isValid && (
                        <p
                            style={{
                                color: "#ff5a45",
                                fontSize: isMobile ? "18px" : "22px",
                                fontWeight: "500",
                                textAlign: isMobile ? "left" : "center",
                                marginTop: isMobile ? "10px" : "160px",
                                marginBottom: isMobile ? "20px" : "0",
                            }}
                        >
                            Please select all required options
                        </p>
                    )}

                    {!isMobile && (
                        <div
                            style={{
                                marginTop: "auto",
                                alignSelf: "flex-end",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-end",
                                gap: "12px",
                            }}
                        >
                            <div
                                style={{
                                    width: "160px",
                                    padding: "16px 18px",
                                    borderRadius: "999px",
                                    background: "rgba(255,255,255,0.16)",
                                    border: "1px solid rgba(255,255,255,0.35)",
                                    textAlign: "center",
                                    color: "#444",
                                    fontWeight: "700",
                                    fontSize: "16px",
                                    boxSizing: "border-box",
                                }}
                            >
                                Price: ${price.toFixed(2)}
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "20px",
                                    flexWrap: "wrap",
                                }}
                            >
                                {addedToCart && isValid && (
                                    <p
                                        style={{
                                            color: "#39a86f",
                                            fontSize: "15px",
                                            fontWeight: "600",
                                            margin: 0,
                                            whiteSpace: "nowrap",
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
                                        boxSizing: "border-box",
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
                    )}
                </div>
            </div>

            {isMobile && (
                <div
                    style={{
                        position: "fixed",
                        left: "50%",
                        bottom: "20px",
                        transform: "translateX(-50%)",
                        width: "calc(100% - 32px)",
                        maxWidth: "420px",
                        zIndex: 100,
                        background: "rgba(255,255,255,0.14)",
                        border: "1px solid rgba(255,255,255,0.30)",
                        backdropFilter: "blur(12px)",
                        borderRadius: "22px",
                        padding: "14px",
                        boxSizing: "border-box",
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            padding: "14px 16px",
                            borderRadius: "999px",
                            background: "rgba(255,255,255,0.16)",
                            border: "1px solid rgba(255,255,255,0.35)",
                            textAlign: "center",
                            color: "#444",
                            fontWeight: "700",
                            fontSize: "16px",
                            boxSizing: "border-box",
                            marginBottom: "10px",
                        }}
                    >
                        Price: ${price.toFixed(2)}
                    </div>

                    {addedToCart && isValid && (
                        <p
                            style={{
                                color: "#39a86f",
                                fontSize: "14px",
                                fontWeight: "600",
                                margin: "0 0 10px 0",
                                textAlign: "center",
                            }}
                        >
                            Customized product added to cart
                        </p>
                    )}

                    <Button
                        text="Add to Cart"
                        variant={isValid ? "purple" : "purpleDisabled"}
                        disabled={!isValid}
                        style={{ width: "100%" }}
                        onClick={handleAddToCart}
                    />
                </div>
            )}
        </div>
    );
}

export default Customize;