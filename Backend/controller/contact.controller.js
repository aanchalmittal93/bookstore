import Contact from "../model/contact.model.js"


// Controller to save a contact message
export const saveContactMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validation
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields (name, email, and message) are required.",
            });
        }

        // Create a new contact entry
        const newContact = new Contact({
            name,
            email,
            message,
        });

        // Save the contact message to the database
        await newContact.save();

        // Send success response
        res.status(201).json({
            success: true,
            message: "Your message has been successfully saved.",
            data: newContact,
        });
    } catch (error) {
        // Handle server errors
        console.error("Error saving contact message:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while saving your message.",
            error: error.message,
        });
    }
};