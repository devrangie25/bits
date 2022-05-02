<template>
    <div>
        <v-card :color="color" flat rounded="lg" class="pa-4">
            <v-card-title>
                About us
            </v-card-title>
            <v-card-text class="subtitle-1">
                {{ text }}
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "aboutUs",
    props: {
        color: {
            default: '',
            type: String
        }
    },

    data() {
        return {
            text: `
                The Bantayan Island Trucking Services System is a simple PHP/MySQLi project that helps a courier company or businesses manage
                their customers parcel details. The system stores all the branches or the company that can be also use when setting a destination
                where the recipient pickup their packages or parcels. The system has tracking feature where can help to monitor the movement of the customer's parcel.
                The system has 2 types of user which is the Admin user and the Customer user.
                The Admin user can manage all the data in the system including managing the branches and branches staff user.
                The Customer user can only track a parcel and manage the list of parcels where the origin or the destination of a parcel under the logged in staff
                branch. The courier of the items has multiple status which are the "Item Accepted by Courier", "Shipped", "Out for Delivery",Arrived at Destination
                "Ready to Pickup", "Delivered", "Picked-up", and "Unsuccessfull Delivery Attempt". This status will help to determine the parcels movement.
                The system also generates a report between two dates and selected status. The couriered items of the clients can be set into "Deliver" and "Pickup".
                The parcels that marked as deliver are the items to be deliver directly to the recipient while the pickup will be delivered to the branch of the company
                near to the recipient address. The system admin or staff user can store or adds a multiple items at the same time but these items will be stored in
                the database seperately because each package has a different reference number or different tracking number. For example, Client 1 has 3 boxes of package
                to be couriered in a same recipient, the system user can submit the parcel registration to the system at once but will be stored
                seperately so that the system will generate a different unique reference number in each item so that they can track easily each items.
            `,
        };
    },
};
</script>
