const responses = {
    "business hours": "We are open from 9 AM to 5 PM, Monday to Friday.",
    "opening hours": "We are open from 9 AM to 5 PM, Monday to Friday.",
    "office hours": "We are open from 9 AM to 5 PM, Monday to Friday.",
    "hours of operation": "We are open from 9 AM to 5 PM, Monday to Friday.",
    "working hours": "We are open from 9 AM to 5 PM, Monday to Friday.",
    "reset password": "You can reset your password by clicking 'Forgot Password' on the login page.",
    "forgot password": "You can reset your password by clicking 'Forgot Password' on the login page.",
    "change password": "You can reset your password by clicking 'Forgot Password' on the login page.",
    "lost password": "You can reset your password by clicking 'Forgot Password' on the login page.",
    "recover password": "You can reset your password by clicking 'Forgot Password' on the login page.",
    "contact support": "You can contact our support team via email at support@example.com.",
    "get help": "You can contact our support team via email at support@example.com.",
    "customer service": "You can contact our support team via email at support@example.com.",
    "help desk": "You can contact our support team via email at support@example.com.",
    "support": "You can contact our support team via email at support@example.com.",
    "pricing": "You can find our pricing details on the pricing page on our website.",
    "cost": "You can find our pricing details on the pricing page on our website.",
    "fees": "You can find our pricing details on the pricing page on our website.",
    "price": "You can find our pricing details on the pricing page on our website.",
    "charges": "You can find our pricing details on the pricing page on our website.",
    "location": "We are located at 123 Main Street, Anytown, USA.",
    "address": "We are located at 123 Main Street, Anytown, USA.",
    "where are you located": "We are located at 123 Main Street, Anytown, USA.",
    "office location": "We are located at 123 Main Street, Anytown, USA.",
    "services": "We offer a range of services including web development, SEO, and digital marketing.",
    "what do you offer": "We offer a range of services including web development, SEO, and digital marketing.",
    "products": "We offer a range of services including web development, SEO, and digital marketing.",
    "offerings": "We offer a range of services including web development, SEO, and digital marketing.",
    "return policy": "We offer a 30-day return policy on all items. Please refer to our website for more details.",
    "refund policy": "We offer refunds within 30 days of purchase, provided the item is in its original condition.",
    "track order": "You can track your order by logging into your account and visiting the 'Order History' page.",
    "payment methods": "We accept all major credit cards, PayPal, and bank transfers.",
    "international shipping": "Yes, we offer international shipping to most countries.",
    "cancel order": "To cancel your order, please contact our support team as soon as possible.",
    "change shipping address": "You can change your shipping address by logging into your account and updating your profile.",
    "privacy policy": "Our privacy policy is available on our website under the 'Privacy Policy' section.",
    "apply for a job": "You can apply for a job by visiting our 'Careers' page and submitting your resume.",
    "update account information": "You can update your account information by logging into your account and visiting the 'Account Settings' page.",
    "bulk order discounts": "Yes, we offer discounts for bulk orders. Please contact our sales team for more details.",
    "shipping options": "We offer standard, express, and overnight shipping options.",
    "shipping time": "Shipping times vary depending on your location and the shipping method chosen.",
    "track shipment": "Yes, you can track your shipment using the tracking number provided in your order confirmation email.",
    "damaged item": "If you receive a damaged item, please contact our support team for assistance.",
    "loyalty program": "Yes, we have a loyalty program that rewards you with points for every purchase.",
    "redeem loyalty points": "You can redeem your loyalty points at checkout for discounts on future purchases.",
    "exchange policy": "We offer exchanges within 30 days of purchase, provided the item is in its original condition.",
    "gift cards": "Yes, we offer gift cards that can be purchased on our website.",
    "promo code": "You can apply a promo code at checkout to receive a discount on your order.",
    "subscribe to newsletter": "You can subscribe to our newsletter by entering your email address in the subscription box on our website.",
    "cancellation policy": "You can cancel your order within 24 hours of placing it for a full refund.",
    "delete account": "To delete your account, please contact our support team.",
    "free shipping": "We offer free shipping on orders over $50.",
    "leave a review": "You can leave a review by logging into your account and visiting the 'Reviews' section.",
    "mobile app": "Yes, our mobile app is available for download on both the App Store and Google Play.",
    "update payment information": "You can update your payment information by logging into your account and visiting the 'Payment Settings' page.",
    "cookie policy": "Our cookie policy is available on our website under the 'Cookie Policy' section.",
    "return item to store": "Yes, you can return items to any of our retail stores with your receipt.",
    "financing options": "Yes, we offer financing options through our partner lenders.",
    "reset username": "You can reset your username by contacting our support team.",
    "forgot username": "If you forgot your username, you can retrieve it by clicking 'Forgot Username' on the login page.",
    "price matching": "Yes, we offer price matching on identical items from competing retailers.",
    "order out of stock": "Yes, you can place a backorder for out of stock items, and we will ship them when they become available.",
    "find product": "You can use the search bar at the top of our website to find products.",
    "size guide": "Yes, our size guide is available on the product page under 'Size Chart'.",
    "apply gift card": "You can apply a gift card at checkout by entering the gift card code.",
    "warranty policy": "We offer a one-year warranty on all products. Please refer to our website for more details.",
    "custom items": "Yes, we offer custom items. Please contact our sales team for more details.",
    "request catalog": "You can request a catalog by filling out the form on our 'Catalog Request' page.",
    "pricing policy": "Our pricing policy is available on our website under the 'Pricing Policy' section.",
    "sign up for account": "You can sign up for an account by clicking 'Sign Up' at the top of our website.",
    "student discounts": "Yes, we offer student discounts. Please verify your student status to receive the discount.",
    "late order": "If your order is late, please contact our support team for assistance.",
    "change order": "You can change your order within 24 hours of placing it by contacting our support team.",
    "environmental policy": "Our environmental policy is available on our website under the 'Environmental Policy' section.",
    "sign out": "You can sign out of your account by clicking 'Sign Out' at the top of our website.",
    "mission statement": "Our mission is to provide high-quality products and exceptional customer service.",
    "referral bonuses": "Yes, we offer referral bonuses. Please refer a friend to earn rewards.",
    "set up subscription": "You can set up a subscription by selecting the 'Subscribe' option on the product page.",
    "update subscription": "You can update your subscription by logging into your account and visiting the 'Subscription Settings' page.",
    "subscription issues": "If your subscription is not working, please contact our support team for assistance.",
    "free trial": "Yes, we offer a free trial on select products. Please refer to our website for more details.",
    "cancel subscription": "You can cancel your subscription by logging into your account and visiting the 'Subscription Settings' page.",
    "blog": "Yes, our blog is available on our website under the 'Blog' section.",
    "change email preferences": "You can change your email preferences by logging into your account and visiting the 'Email Settings' page.",
    "wrong item": "If you receive the wrong item, please contact our support team for assistance.",
    "curbside pickup": "Yes, we offer curbside pickup at select locations. Please refer to our website for more details.",
    "update shipping information": "You can update your shipping information by logging into your account and visiting the 'Shipping Settings' page.",
    "security policy": "Our security policy is available on our website under the 'Security Policy' section.",
    "two-factor authentication": "You can set up two-factor authentication by logging into your account and visiting the 'Security Settings' page.",
    "download receipts": "You can download receipts from your order history by logging into your account and visiting the 'Order History' page.",
    "upgrade account": "You can upgrade your account by contacting our support team or visiting the 'Account Upgrades' page.",
    "service interruptions": "If you experience service interruptions, please contact our support team for assistance.",
    "feedback": "We value your feedback! Please let us know how we can improve by filling out our feedback form on the website.",
    "special offers": "You can find special offers on our website under the 'Special Offers' section.",
    "community events": "We host community events throughout the year. Please refer to our website for upcoming events.",
    "charitable donations": "We are committed to charitable giving. Please visit our website to learn more about our donation programs.",
    "partnership opportunities": "If you're interested in partnering with us, please contact our business development team.",
    "affiliate program": "We offer an affiliate program. Please visit our 'Affiliate Program' page for more details.",
    "customer testimonials": "You can read customer testimonials on our website under the 'Testimonials' section.",
    "company history": "Our company history is available on our website under the 'About Us' section.",
    "social media": "You can follow us on social media for updates and promotions. Find us on Facebook, Twitter, and Instagram.",
    "online support": "Our online support team is available via chat and email. Please visit our 'Support' page for more details.",
    "contact form": "You can contact us using the form available on our 'Contact Us' page.",
    "user guides": "User guides and manuals are available on our website under the 'Support' section.",
    "training": "We offer training sessions for our products. Please visit our website to schedule a session.",
    "technical support": "Our technical support team is available to assist with any issues. Please contact us through our support channels.",
    "product registration": "You can register your product by visiting the 'Product Registration' page on our website.",
    "installation assistance": "We offer installation assistance for our products. Please contact our support team for help.",
    "troubleshooting": "You can find troubleshooting tips on our website under the 'Support' section.",
    "warranty claim": "To file a warranty claim, please contact our support team with your purchase details.",
    "returns and exchanges": "Our returns and exchanges policy is available on our website under the 'Returns & Exchanges' section.",
    "product recalls": "If there is a product recall, we will notify customers through email and our website.",
    "accessibility features": "Our website is designed to be accessible. Please contact us if you need additional assistance.",
    "international orders": "For international orders, please contact our support team to discuss shipping options.",
    "order confirmation": "You will receive an order confirmation email once your order has been processed.",
    "delivery estimates": "Delivery estimates are provided at checkout based on your location and shipping method.",
    "order modifications": "To modify your order, please contact our support team as soon as possible.",
    "price adjustments": "We offer price adjustments if an item goes on sale within 7 days of your purchase.",
    "order history": "You can view your order history by logging into your account and visiting the 'Order History' page.",
    "customer support hours": "Our customer support team is available from 9 AM to 5 PM, Monday to Friday.",
    "technical issues": "If you're experiencing technical issues, please contact our support team for assistance.",
    "payment issues": "If you're having issues with payment, please contact our billing department for help.",
    "delivery issues": "For delivery issues, please contact our shipping department for assistance.",
    "order status": "You can check the status of your order by logging into your account and visiting the 'Order Status' page.",
    "address change": "To change your address, please update your profile in your account settings.",
    "account verification": "Account verification is required for certain actions. Please follow the instructions sent to your email.",
    "customer feedback": "We welcome customer feedback to improve our services. Please fill out our feedback form.",
    "service inquiries": "For service inquiries, please contact our support team or visit our 'Services' page.",
    "request a callback": "You can request a callback by filling out the form on our 'Contact Us' page.",
    "new products": "You can find information about new products on our website under the 'New Arrivals' section.",
    "seasonal promotions": "We offer seasonal promotions throughout the year. Please visit our website for current offers.",
    "order tracking": "Order tracking information is available in your order confirmation email and on the 'Order Status' page.",
    "gift wrapping": "Yes, we offer gift wrapping for an additional fee. Please select the gift wrapping option at checkout.",
    "bulk purchase": "For bulk purchases, please contact our sales team for pricing and availability.",
    "customer service email": "You can reach our customer service team at support@example.com.",
    "live chat support": "We offer live chat support during business hours. Click the chat icon on our website to start a conversation.",
    "service coverage": "Our services are available nationwide. Please contact us for more details about coverage in your area.",
    "return procedure": "To return an item, please follow the return procedure outlined on our website.",
    "exchange procedure": "To exchange an item, please follow the exchange procedure outlined on our website.",
    "promotional events": "We host promotional events throughout the year. Please visit our website for upcoming events.",
    "special requests": "If you have special requests, please contact our support team and we will do our best to accommodate them.",
    "order cancellation": "You can cancel your order within 24 hours of placing it. Please contact our support team to request a cancellation.",
    "customer loyalty program": "Our customer loyalty program rewards you with points for every purchase. Please visit our website to learn more.",
    "online orders": "You can place orders online through our website or mobile app.",
    "order pickup": "You can choose to pick up your order at one of our retail locations.",
    "digital downloads": "We offer digital downloads for some of our products. Please check the product page for availability.",
    "product compatibility": "For product compatibility questions, please refer to the product specifications on our website or contact our support team.",
    "product features": "Product features are listed on the product page under 'Product Details'.",
    "inventory availability": "Inventory availability is updated in real-time on our website.",
    "customer satisfaction": "Your satisfaction is important to us. If you're not happy with your purchase, please contact our support team.",
    "contact information": "Our contact information is available on our 'Contact Us' page.",
    "technical specifications": "Technical specifications for our products are available on the product page under 'Technical Details'.",
    "software updates": "Software updates are available for download on our website. Please check the 'Software Updates' section.",
    "product manuals": "Product manuals are available for download on the product page under 'Product Manuals'.",
    "training resources": "Training resources are available on our website under the 'Training' section.",
    "support resources": "Support resources, including FAQs and troubleshooting guides, are available on our website under the 'Support' section.",
    "maintenance services": "We offer maintenance services for our products. Please contact our support team to schedule a maintenance appointment.",
    "product installation": "Product installation services are available. Please contact our support team for more information.",
    "service agreements": "Service agreements are available for certain products. Please contact our sales team for more details.",
    "system requirements": "System requirements for our products are listed on the product page under 'System Requirements'.",
    "user account settings": "You can manage your user account settings by logging into your account and visiting the 'Account Settings' page.",
    "purchase history": "You can view your purchase history by logging into your account and visiting the 'Purchase History' page.",
    "order confirmation email": "You will receive an order confirmation email once your order is placed.",
    "customer service phone number": "You can reach our customer service team at (123) 456-7890.",
    "return authorization": "You will need a return authorization to process your return. Please contact our support team to obtain one.",
    "exchange authorization": "You will need an exchange authorization to process your exchange. Please contact our support team to obtain one.",
    "product warranty": "Our product warranty covers defects in material and workmanship. Please refer to our warranty policy for more details.",
    "complaint resolution": "To resolve a complaint, please contact our support team and provide details about the issue.",
    "customer assistance": "We offer customer assistance through various channels, including phone, email, and live chat.",
    "feedback survey": "We conduct feedback surveys to gather your input and improve our services. Please check your email for survey invitations.",
    "company values": "Our company values include integrity, customer satisfaction, and innovation. Learn more about our values on our website.",
    "business partnerships": "We are open to business partnerships. Please contact our business development team to discuss opportunities.",
    "product support": "Product support is available through our support team. Please contact us with any questions or issues.",
    "service features": "Service features are outlined on our website under the 'Services' section.",
    "online shopping": "You can shop online through our website or mobile app. Browse our products and place orders easily.",
    "order fulfillment": "We strive to fulfill orders promptly. You will receive a notification when your order has been shipped.",
    "customer care": "Our customer care team is dedicated to providing excellent service. Please contact us with any questions or concerns.",
    "product updates": "Stay updated with the latest product releases and updates by subscribing to our newsletter.",
    "payment options": "We offer various payment options, including credit cards, PayPal, and bank transfers.",
    "order delivery": "Order delivery times vary based on your location and shipping method. You will receive an estimated delivery date at checkout.",
    "customer support portal": "Access our customer support portal on our website for self-service options and support resources.",
    "product features and benefits": "Product features and benefits are detailed on the product page. Please refer to the 'Product Details' section.",
    "technical support hours": "Our technical support team is available from 9 AM to 5 PM, Monday to Friday.",
    "order inquiries": "For inquiries about your order, please contact our support team with your order number.",
    "delivery tracking": "Track your delivery using the tracking number provided in your order confirmation email.",
    "product returns": "To return a product, please follow the return instructions on our website and contact our support team.",
    "customer service chat": "Chat with our customer service team online during business hours for immediate assistance.",
    "order modifications policy": "Order modifications can be made within 24 hours of placing the order. Please contact our support team.",
    "subscription management": "Manage your subscription preferences by logging into your account and visiting the 'Subscription Settings' page.",
    "service availability": "Service availability varies by location. Please check our website or contact our support team for details.",
    "order issues": "For issues with your order, please contact our support team with your order number and details.",
    "product availability": "Product availability is updated in real-time on our website. Check the product page for current stock information.",
    "customer satisfaction survey": "We conduct satisfaction surveys to gather feedback and improve our services. Please participate to help us serve you better.",
    "account security": "For account security, enable two-factor authentication and regularly update your password.",
    "order status updates": "Receive order status updates via email or SMS based on your preferences.",
    "product updates and notifications": "Subscribe to product updates and notifications to stay informed about new releases and special offers.",
    "return and exchange instructions": "Return and exchange instructions are provided on our website. Please follow the guidelines and contact our support team if needed.",
    "customer support resources": "Access customer support resources, including FAQs and troubleshooting guides, on our website.",
    "service improvements": "We continuously work on improving our services. Share your feedback to help us enhance our offerings.",
    "feedback and suggestions": "We welcome your feedback and suggestions. Please contact us with any ideas or comments.",
    "company mission": "Our mission is to deliver high-quality products and exceptional service to our customers.",
    "service features and benefits": "Explore the features and benefits of our services on our website under the 'Services' section.",
    "account management": "Manage your account settings, preferences, and personal information by logging into your account.",
    "order processing": "Order processing times vary based on availability and shipping method. You will receive updates throughout the process.",
    "product catalog": "Browse our product catalog online to explore our full range of offerings.",
    "order tracking information": "Track your order using the tracking number provided in your confirmation email or through your account.",
    "customer service hours of operation": "Customer service hours of operation are from 9 AM to 5 PM, Monday to Friday.",
    "product support resources": "Access product support resources, including manuals and troubleshooting guides, on our website.",
    "service quality": "We are committed to providing high-quality service. Please contact us if you have any concerns or issues.",
    "account creation": "Create an account by signing up on our website. Access additional features and track your orders with an account.",
    "order fulfillment process": "Our order fulfillment process includes processing, packaging, and shipping your order. You will receive updates along the way.",
    "customer experience": "We strive to provide a positive customer experience. Please share your feedback to help us improve.",
    "service inquiries and requests": "Submit service inquiries and requests through our contact form or customer support channels.",
    "product reviews": "Read product reviews on our website to see what other customers have to say about our products.",
    "special requests and accommodations": "Contact our support team with special requests or accommodations, and we will do our best to assist you.",
    "order status tracking": "Track the status of your order through your account or using the tracking number provided.",
    "customer support channels": "Our customer support channels include phone, email, and live chat. Choose the option that works best for you.",
    "service details": "For detailed information about our services, please visit our website or contact our support team.",
    "product information": "Find detailed product information, including specifications and features, on the product page of our website.",
    "customer service inquiries": "For customer service inquiries, please contact our support team via phone, email, or live chat.",
    "product availability and stock": "Product availability and stock levels are updated in real-time on our website. Check the product page for current information.",
    "account assistance": "For assistance with your account, please contact our support team or visit the 'Account Help' section on our website.",
    "order changes": "To make changes to your order, please contact our support team as soon as possible.",
    "return and refund policy": "Our return and refund policy is available on our website. Please review it for detailed information on returns and refunds.",
    "customer support team": "Our customer support team is available to assist you with any questions or concerns. Contact us through our support channels.",
    "product details": "Find detailed product information, including descriptions and specifications, on the product page of our website.",
    "customer service phone": "You can reach our customer service team by phone at (123) 456-7890 during business hours.",
    "order updates": "Receive updates about your order via email or SMS based on your preferences.",
    "product returns and exchanges": "For product returns and exchanges, please follow the instructions provided on our website and contact our support team.",
    "account support": "For support with your account, including login issues and profile updates, please contact our support team.",
    "order status information": "Check the status of your order by logging into your account or using the tracking number provided.",
    "customer support availability": "Our customer support is available during business hours. Contact us via phone, email, or live chat.",
    "product support assistance": "For assistance with product support, including troubleshooting and technical issues, please contact our support team.",
    "service and support": "Our service and support team is here to help with any questions or issues you may have. Contact us for assistance.",
    "product inquiries": "For inquiries about our products, including features and availability, please contact our support team.",
    "account issues": "If you encounter any issues with your account, please contact our support team for assistance.",
    "order cancellation policy": "Our order cancellation policy allows you to cancel orders within 24 hours of placing them. Please contact our support team.",
    "customer feedback form": "Complete our customer feedback form to share your thoughts and help us improve our services.",
    "product catalog and pricing": "Explore our product catalog and pricing information on our website. Find details about our products and services.",
    "service updates": "Stay informed about service updates and changes by subscribing to our newsletter or checking our website.",
    "order management": "Manage your orders through your account or by contacting our support team for assistance with changes and updates.",
    "account login issues": "For issues with logging into your account, please contact our support team for help with password resets and account recovery.",
    "product returns process": "Follow the product returns process outlined on our website and contact our support team if you need assistance.",
    "service support channels": "Our support channels include phone, email, and live chat. Choose the option that works best for you.",
    "product availability inquiries": "For inquiries about product availability, please contact our support team or check the product page on our website.",
    "account management tools": "Use the account management tools available on our website to update your profile and preferences.",
    "order tracking and status": "Track your order and check its status through your account or using the tracking number provided.",
    "customer service contact": "Contact our customer service team for assistance with any questions or issues. Reach out via phone, email, or live chat.",
    "product information and details": "Find detailed product information and specifications on the product page of our website.",
    "service and support resources": "Access service and support resources, including FAQs and troubleshooting guides, on our website.",
    "product returns and exchanges policy": "Review our product returns and exchanges policy on our website for detailed information on how to return or exchange items.",
    "account assistance and support": "Get assistance with your account, including login issues and profile updates, by contacting our support team.",
    "order updates and notifications": "Receive updates and notifications about your order via email or SMS based on your preferences.",
    "customer feedback and suggestions": "Share your feedback and suggestions with us to help us improve our services. We value your input.",
    "product catalog and availability": "Browse our product catalog and check availability on our website. Find the products you're looking for.",
    "service updates and news": "Stay updated with the latest news and updates about our services by subscribing to our newsletter or checking our website.",
    "order management and support": "Manage your orders and get support for any issues by contacting our customer service team or using the tools on our website.",
    "account management and support": "Access account management tools and support for any issues related to your account through our website or support team.",
    "product information and support": "Find information and support for our products, including specifications and troubleshooting, on our website or by contacting our support team.",
    "service support and inquiries": "Get support and make inquiries about our services through our customer service channels, including phone, email, and live chat.",
    "product updates and notifications": "Stay informed about product updates and notifications by subscribing to our newsletter or checking our website.",
    "order tracking and management": "Track your orders and manage them through your account or by contacting our support team for assistance."
};

const synonymMap = {
    "business hours": ["opening hours", "office hours", "hours of operation", "working hours"],
    "reset password": ["forgot password", "change password", "lost password", "recover password"],
    "contact support": ["get help", "customer service", "help desk", "support"],
    "pricing": ["cost", "fees", "price", "charges"],
    "location": ["address", "where are you located", "office location"],
    "services": ["what do you offer", "products", "offerings"],
    // Add more synonyms as needed...
};

document.getElementById("send-btn").addEventListener("click", sendMessage);
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById("user-input").value.toLowerCase().trim();
    if (userInput) {
        addMessage(userInput, "user-message");
        document.getElementById("user-input").value = "";

        setTimeout(() => {
            const botResponse = getResponse(userInput);
            addMessage(botResponse, "bot-message");
        }, 500);
    }
}

function addMessage(message, className) {
    const messageElement = document.createElement("div");
    messageElement.className = `message ${className}`;
    messageElement.textContent = message;
    document.getElementById("chat-box").appendChild(messageElement);
    document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight;
}

function getResponse(userInput) {
    // Handle specific greeting
    if (userInput.includes("hi") || userInput.includes("hello") || userInput.includes("hey")) {
        return "Hello! How can I assist you today?";
    }

    // Handle basic patterns like date inquiries
    const datePattern = /\b(?:what|when|which)\b.*\b(date|day)\b/;
    if (datePattern.test(userInput)) {
        return "Today's date is " + new Date().toLocaleDateString() + ".";
    }

    // Check for simple math queries
    const mathPattern = /\b(\d+)\s*(\+|\-|\*|\/)\s*(\d+)\b/;
    const match = userInput.match(mathPattern);
    if (match) {
        const num1 = parseFloat(match[1]);
        const operator = match[2];
        const num2 = parseFloat(match[3]);
        let result;

        switch (operator) {
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '/': result = num1 / num2; break;
        }

        return `The result of ${num1} ${operator} ${num2} is ${result}.`;
    }

    // Direct keyword matching
    const keywords = Object.keys(responses);
    for (let keyword of keywords) {
        if (userInput.includes(keyword)) {
            return responses[keyword];
        }
    }

    // Synonym recognition
    for (let key in synonymMap) {
        for (let synonym of synonymMap[key]) {
            if (userInput.includes(synonym)) {
                return responses[key];
            }
        }
    }

    // Fallback response
    const fallbackOptions = [
        "I'm not sure I understand. Did you mean one of the following?",
        "Sorry, can you clarify? You might be asking about:",
        "I'm having trouble understanding. Maybe try asking about:"
    ];
    const suggestions = ["business hours", "resetting your password", "contacting support", "pricing", "location", "services"];
    const fallbackPrompt = fallbackOptions[Math.floor(Math.random() * fallbackOptions.length)];
    const suggestionList = suggestions.map(s => `- ${s}`).join("\n");

    return `${fallbackPrompt}\n${suggestionList}`;
}
