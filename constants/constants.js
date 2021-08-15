const screens = {
    main_layout: "MainLayout",
    home: "Home",
    search: "Search",
    cart: "Cart",
    favourite: "Favourite",
    notification: "Notification",
}

const bottom_tabs = [
    {
        id: 0,
        label: screens.home,
    },
    {
        id: 1,
        label: screens.search,
    },
    {
        id: 2,
        label: screens.cart,
    },
    {
        id: 3,
        label: screens.favourite,
    },
    {
        id: 4,
        label: screens.notification,
    },
]

const delivery_time = [
    {
        id: 1,
        label: "10 Mins",
    },
    {
        id: 2,
        label: "20 Mins"
    },
    {
        id: 3,
        label: "30 Mins"
    }
]

const ratings = [
    {
        id: 1,
        label: 1,
    },
    {
        id: 2,
        label: 2,
    },
    {
        id: 3,
        label: 3,
    },
    {
        id: 4,
        label: 4,
    },
    {
        id: 5,
        label: 5,
    }
]

const tags = [
    {
        id: 1,
        label: "Burger"
    },
    {
        id: 2,
        label: "Fast Food"
    },
    {
        id: 3,
        label: "Pizza"
    },
    {
        id: 4,
        label: "Asian"
    },
    {
        id: 5,
        label: "Dessert"
    },
    {
        id: 6,
        label: "Breakfast"
    },
    {
        id: 7,
        label: "Vegetable"
    },
    {
        id: 8,
        label: "Taccos"
    }
]

const outfit = [
    {
        id: 1,
        color: "#BEECC4",
        aspectratio: 1.25
    },
    {
        id: 2,
        color: "#BEECC4",
        aspectratio: 0.75
    },
    {
        id: 3,
        color: "#BEECC4",
        aspectratio: 0.75
    },
    {
        id: 4,
        color: "#BEECC4",
        aspectratio: 1.25
    },
    {
        id: 5,
        color: "#BEECC4",
        aspectratio: 1.25
    },
    {
        id: 6,
        color: "#BEECC4",
        aspectratio: 0.75
    },

    {
        id: 7,
        color: "#BEECC4",
        aspectratio: 0.75
    },
    {
        id: 8,
        color: "#BEECC4",
        aspectratio: 1.25
    },
]
export default {
    screens,
    bottom_tabs,
    delivery_time,
    ratings,
    tags,
    outfit
}