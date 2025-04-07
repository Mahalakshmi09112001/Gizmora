const addToCartModel = require("../../models/cartProduct");

const clearCartController = async (req, res) => {
    try {
        const currentUser = req.userId; // Get the current user ID from the request

        // Find and delete all items in the cart for the current user
        const deleteResult = await addToCartModel.deleteMany({ userId: currentUser });

        // Check if any items were deleted
        if (deleteResult.deletedCount === 0) {
            return res.json({
                message: "No items found in the cart to clear.",
                success: false,
                error: true
            });
        }

        return res.json({
            message: "Cart cleared successfully.",
            success: true,
            error: false
        });
    } catch (err) {
        console.error("Error clearing cart:", err);
        res.json({
            message: err?.message || err,
            error: true,
            success: false
        });
    }
};

module.exports = clearCartController;
