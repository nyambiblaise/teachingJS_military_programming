/*
we're going to touch on a common scenario where you can completely get rid of if conditions and have far better maintainable code.

Let's say you're building an app like Deliveroo and you have a method that sends push notifications to your users updating them on the progress of their order:
 */
const getPushMessage = status => {
    if (status === "received") {
        return "Restaurant started working on your order.";
    } else if (status === "prepared") {
        return "Driver is picking up your food."
    } else if (status === "en_route") {
        return "Driver is cycling your way!";
    } else if (status === "arrived") {
        return "Enjoy your food!";
    } else {
        return "Unknown status";
    }
}