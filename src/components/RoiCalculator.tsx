import React, { useState, useMemo } from 'react';
import { Calculator, TrendingUp, Clock, DollarSign, ArrowRight } from 'lucide-react';

interface RoiCalculatorProps {
  onRequestSample: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onRequestSample }) => {
  const [repsCount, setRepsCount] = useState<number>(5);
  const [averageDealSize, setAverageDealSize] = useState<number>(25000);
  const [currentBounceRate, setCurrentBounceRate] = useState<number>(18);

  const calculations = useMemo(() => {
    // Assumptions:
    // Avg SDR spends 15 hours/week searching and dialing bad contacts if bounce rate is ~18%
    // With 95%+ verified data, wasted time drops from 15h to 2h/week (13h saved per rep/week)
    const hoursSavedPerRepMonthly = 13 * 4.2;
    const totalHoursSavedMonthly = Math.round(hoursSavedPerRepMonthly * repsCount);

    // Each 40 hours of productive prospecting generates approx 1 additional qualified discovery meeting
    const additionalMeetingsPerMonth = Math.max(
      1,
      Math.round((totalHoursSavedMonthly / 35) * (1 + (currentBounceRate - 5) / 20))
    );

    // B2B benchmark: ~15% of discovery meetings close into won deals over the sales cycle
    const closedDealsPerQuarter = Math.max(1, Math.round(additionalMeetingsPerMonth * 3 * 0.15));

    const pipelineLiftQuarterly = closedDealsPerQuarter * averageDealSize;
    const annualRevenueLift = pipelineLiftQuarterly * 4;

    return {
      totalHoursSavedMonthly,
      additionalMeetingsPerMonth,
      pipelineLiftQuarterly,
      annualRevenueLift,
    };
  }, [repsCount, averageDealSize, currentBounceRate]);

  return (
    <div className="bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-800 text-white shadow-xl">
      <div className="max-w-3xl mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
          <Calculator className="w-4 h-4" />
          <span>Interactive Outbound ROI Engine</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Calculate Your Pipeline Lift with Verified Contact Intelligence
        </h3>
        <p className="text-sm text-slate-400 mt-2">
          Discover how eliminating bounced emails and dead corporate switchboards translates directly into recovered SDR hours and closed revenue.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-6 space-y-6 bg-slate-800/60 p-6 rounded-xl border border-slate-700/60">
          {/* Reps count slider */}
          <div>
            <div className="flex justify-between items-center text-xs font-medium text-slate-300 mb-2">
              <span>Sales Development Reps (SDRs / AEs):</span>
              <span className="font-bold text-white text-sm tabular-nums">
                {repsCount} {repsCount === 1 ? 'Rep' : 'Reps'}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={repsCount}
              onChange={(e) => setRepsCount(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1">
              <span>1</span>
              <span>25</span>
              <span>50+</span>
            </div>
          </div>

          {/* Average Contract Value (ACV) */}
          <div>
            <div className="flex justify-between items-center text-xs font-medium text-slate-300 mb-2">
              <span>Average Contract Value (ACV):</span>
              <span className="font-bold text-white text-sm tabular-nums">
                ${averageDealSize.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="5000"
              max="150000"
              step="5000"
              value={averageDealSize}
              onChange={(e) => setAverageDealSize(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1">
              <span>$5,000</span>
              <span>$75,000</span>
              <span>$150,000+</span>
            </div>
          </div>

          {/* Current estimated bounce rate */}
          <div>
            <div className="flex justify-between items-center text-xs font-medium text-slate-300 mb-2">
              <span>Current Data Bounce / Inaccuracy Rate:</span>
              <span className="font-bold text-amber-400 text-sm tabular-nums">
                {currentBounceRate}%
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="35"
              step="1"
              value={currentBounceRate}
              onChange={(e) => setCurrentBounceRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1">
              <span>5% (Healthy)</span>
              <span>18% (Industry Avg)</span>
              <span>35% (Severe Decay)</span>
            </div>
          </div>
        </div>

        {/* Calculated Results Card */}
        <div className="lg:col-span-6 bg-gradient-to-br from-blue-950/80 to-slate-900 p-6 sm:p-7 rounded-xl border border-blue-900/60 space-y-6">
          <div className="border-b border-blue-900/40 pb-4">
            <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold">
              Projected Annual Pipeline Gain
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1 tabular-nums">
              +${calculations.annualRevenueLift.toLocaleString()}
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Calculated from recovered rep capacity converted into closed-won contracts.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900/80 p-3.5 rounded-lg border border-slate-800">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>Monthly Hours Saved</span>
              </div>
              <div className="text-xl font-bold text-white mt-1 tabular-nums">
                {calculations.totalHoursSavedMonthly.toLocaleString()} hrs
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">Across {repsCount} outbound reps</p>
            </div>

            <div className="bg-slate-900/80 p-3.5 rounded-lg border border-slate-800">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                <span>Added Meetings / Mo</span>
              </div>
              <div className="text-xl font-bold text-emerald-400 mt-1 tabular-nums">
                +{calculations.additionalMeetingsPerMonth} meetings
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">High-intent decision-makers</p>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onRequestSample}
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-lg font-semibold text-xs tracking-wide shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Request Custom Sample for Your ICP</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-center text-slate-400 mt-2">
              Free 50-contact verified test sample with direct dials for qualified teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
