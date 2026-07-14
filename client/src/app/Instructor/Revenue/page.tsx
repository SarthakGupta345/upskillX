"use client"
import React, { useState } from 'react'
import { Wallet, TrendingUp, ArrowUpRight, AlertTriangle, CheckCircle, HelpCircle } from 'lucide-react'

const RevenuePage = () => {
    // 1. Core financial data tracking state
    const [financials, setFinancials] = useState({
        lifetimeEarnings: 45280.50,
        currentBalance: 12450.00,
        withdrawnToDate: 32830.50
    })

    // 2. State metrics for checking input withdrawal tasks
    const [withdrawAmount, setWithdrawAmount] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [isProcessing, setIsProcessing] = useState(false)

    // 3. Mock past transactional database entries
    const [history, setHistory] = useState([
        { id: 'TXN-9021', date: 'July 08, 2026', amount: 8500.00, status: 'Completed' },
        { id: 'TXN-8843', date: 'June 02, 2026', amount: 12000.00, status: 'Completed' },
        { id: 'TXN-7612', date: 'May 14, 2026', amount: 12330.50, status: 'Completed' },
    ])

    const handleWithdrawSubmit = (e) => {
        e.preventDefault()
        setErrorMessage('')
        setSuccessMessage('')

        const amount = parseFloat(withdrawAmount)

        // 1. Defensive Validation Workflow
        if (isNaN(amount) || amount <= 0) {
            setErrorMessage('Please enter a valid amount greater than zero.')
            return
        }

        if (amount < 500) {
            setErrorMessage('The minimum allowable payout threshold is ₹500.')
            return
        }

        if (amount > financials.currentBalance) {
            setErrorMessage(`Insufficient liquid funds. Your maximum available payout limit is ₹${financials.currentBalance.toLocaleString('en-IN')}.`)
            return
        }

        // 2. Processing Lifecycle Simulation
        setIsProcessing(true)

        setTimeout(() => {
            setFinancials(prev => ({
                ...prev,
                currentBalance: prev.currentBalance - amount,
                withdrawnToDate: prev.withdrawnToDate + amount
            }))

            // Insert new transaction item at the top of the timeline
            const newTxn = {
                id: `TXN-${Math.floor(1000 + Math.random() * 9000)}`,
                date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
                amount: amount,
                status: 'Completed'
            }
            setHistory(prev => [newTxn, ...prev])

            setSuccessMessage(`Success! Payout request of ₹${amount.toLocaleString('en-IN')} initialized successfully.`)
            setWithdrawAmount('')
            setIsProcessing(false)
        }, 1000)
    }

    return (
        <div className="max-w-6xl my-10 bg-white  rounded-xl  font-sans text-gray-800">

            {/* Header section */}
            <div className="border-b border-gray-100 pb-5 mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">Revenue</h1>
                <p className="text-sm text-gray-500 mt-1">Track your course sales, check account balances, and manage payouts.</p>
            </div>

            {/* Financial Metrics Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Total Lifetime Revenue */}
                <div className="p-6 border border-emerald-100 bg-emerald-50/30 rounded-xl shadow-sm flex items-center justify-between">
                    <div>
                        <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider block">Lifetime Earnings</span>
                        <span className="text-3xl font-bold text-gray-900 mt-1 block">₹{financials.lifetimeEarnings.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="p-3 bg-emerald-500 text-white rounded-xl shadow-sm">
                        <TrendingUp className="w-5 h-5" />
                    </div>
                </div>

                {/* Amount Available to Withdraw */}
                <div className="p-6 border border-purple-100 bg-purple-50/30 rounded-xl shadow-sm flex items-center justify-between">
                    <div>
                        <span className="text-xs font-semibold text-[#a435f0] uppercase tracking-wider block">Available for Payout</span>
                        <span className="text-3xl font-bold text-gray-900 mt-1 block">₹{financials.currentBalance.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="p-3 bg-[#a435f0] text-white rounded-xl shadow-sm">
                        <Wallet className="w-5 h-5" />
                    </div>
                </div>

                {/* Total Withdrawn To Date */}
                <div className="p-6 border border-blue-100 bg-blue-50/30 rounded-xl shadow-sm flex items-center justify-between">
                    <div>
                        <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider block">Total Withdrawn</span>
                        <span className="text-3xl font-bold text-gray-900 mt-1 block">₹{financials.withdrawnToDate.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="p-3 bg-blue-500 text-white rounded-xl shadow-sm">
                        <ArrowUpRight className="w-5 h-5" />
                    </div>
                </div>
            </div>

            {/* Main Application Segment Split */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

                {/* Left Section: Withdraw Form Tool */}
                <div className="lg:col-span-2 bg-gray-50/50 border border-gray-100 p-6 rounded-xl shadow-sm">
                    <h3 className="text-base font-bold text-gray-900 mb-1">Request Payout</h3>
                    <p className="text-xs text-gray-400 mb-4">Funds will reach your primary active payout route window instantly.</p>

                    <form onSubmit={handleWithdrawSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs font-semibold uppercase mb-2 text-gray-600 tracking-wider">Amount (INR)</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sm font-medium text-gray-400">₹</span>
                                <input
                                    type="number"
                                    value={withdrawAmount}
                                    onChange={(e) => setWithdrawAmount(e.target.value)}
                                    placeholder="0.00"
                                    disabled={isProcessing}
                                    className="w-full h-11 border border-gray-200 rounded-lg outline-none pl-8 pr-4 text-sm font-semibold transition-all focus:border-[#a435f0] focus:ring-2 focus:ring-[#a435f0]/10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isProcessing || financials.currentBalance === 0}
                            className="w-full py-2.5 bg-[#a435f0] hover:bg-[#8b28d1] disabled:bg-gray-200 disabled:text-gray-400 disabled:pointer-events-none text-white font-semibold text-sm rounded-lg transition-all shadow-md shadow-purple-500/10 active:scale-[0.99] uppercase tracking-wider"
                        >
                            {isProcessing ? 'Processing Payout...' : 'Withdraw Funds'}
                        </button>
                    </form>

                    {/* Feedback message dynamic banners */}
                    {errorMessage && (
                        <div className="mt-4 p-3.5 bg-rose-50 border border-rose-100 rounded-lg text-rose-700 text-xs font-medium flex items-start gap-2.5 animate-in fade-in-50 duration-200">
                            <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <div>{errorMessage}</div>
                        </div>
                    )}

                    {successMessage && (
                        <div className="mt-4 p-3.5 bg-emerald-50 border border-emerald-100 rounded-lg text-emerald-800 text-xs font-medium flex items-start gap-2.5 animate-in fade-in-50 duration-200">
                            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <div>{successMessage}</div>
                        </div>
                    )}
                </div>

                {/* Right Section: Transaction Logs Table Grid */}
                <div className="lg:col-span-3 border border-gray-100 rounded-xl p-6 bg-white shadow-sm">
                    <div className="mb-4">
                        <h3 className="text-base font-bold text-gray-900">Payout History</h3>
                        <p className="text-xs text-gray-400 mt-0.5">A complete summary documentation of your latest platform settlements.</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-gray-100 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                                    <th className="pb-3 font-medium">Transaction ID</th>
                                    <th className="pb-3 font-medium">Date</th>
                                    <th className="pb-3 font-medium">Amount</th>
                                    <th className="pb-3 font-medium text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 text-sm">
                                {history.map((item) => (
                                    <tr key={item.id} className="hover:bg-gray-50/40 transition-colors">
                                        <td className="py-3.5 font-semibold text-gray-700">{item.id}</td>
                                        <td className="py-3.5 text-gray-500">{item.date}</td>
                                        <td className="py-3.5 font-bold text-gray-900">₹{item.amount.toLocaleString('en-IN')}</td>
                                        <td className="py-3.5 text-right">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                                                {item.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            {/* Explanatory system note component footer */}
            <div className="mt-8 flex gap-2.5 items-start text-xs text-gray-400 bg-gray-50/50 p-4 border border-gray-100 rounded-xl">
                <HelpCircle className="w-4 h-4 text-gray-300 flex-shrink-0 mt-0.5" />
                <p>Payout validation standard operating procedures require up to 48 hours to post balance metrics out to external financial networks safely. Initialized transaction tokens cannot be rolled back.</p>
            </div>
        </div>
    )
}

export default RevenuePage