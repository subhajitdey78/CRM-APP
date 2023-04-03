/**
 * This will contain the constants names used through out the code
 */
module.exports = {
    releaseStatus: {
        unreleased: 'UNRELEASED',
        released: 'RELEASED',
        blocked: 'BLOCKED'
    },
    userStatus: {
        pending: 'PENDING',
        approved: 'APPROVED',
        rejected: 'REJECTED'
    },
    userTypes: {
        customer: 'CUSTOMER',
        admin: 'ADMIN',
        client: 'CLIENT'
    },
    bookingStatus: {
        imProgress: 'IN_PROGRESS',
        completed: 'COMPLETED',
        cancelled: 'CANCELLED',
        expired: 'EXPIRED'
    },
    paymentStatus: {
        success: 'SUCCESS',
        failed: 'FAILED'
    },
    ticketPrice: 150
}