import data from '../data/data.json';

export default {
    // Auth
    auth: {
        login: (username: string, password: string) => {
            const user = data.users.find(user => user.username === username && user.password === password);
            if (user) {
                return { 
                    firstname: user.firstname,
                    lastname: user.lastname,
                    username, 
                    token: "fake-jwt-token", 
                    userRole: user.role 
                };
            }
            
            return null;
        }
    },

    // Users
    users: {
        getUserById: (id: number) => data.users.find(user => user.id === id),
        getUsers: () => data.users
    },

    // Stations
    stations: {
        getStationById: (id: number) => data.stations.find(station => station.id === id),
        getStations: () => data.stations,
    },

    // Orders
    orders: {
        getOrders: () => data.orders,
        getOrderById: (id: number) => data.orders.find(order => order.id === id),
        getOrdersByStationId: (stationId: number) => data.orders.filter(order => order.currentStationId === stationId)
    },

    // Gigs
    gigs: {
        // getGigsByOrderId: (orderId: number) => data.gigs.filter(gig => gig.orderId === orderId),
        // getAssignedGigs: (userId: number) => data.gigs.filter(gig => gig.assignedTo === userId)
    },
};