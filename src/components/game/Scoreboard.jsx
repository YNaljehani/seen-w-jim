import { motion } from 'framer-motion'
import { useGameStore } from '../../stores/gameStore'
import { useThemeStore } from '../../stores/themeStore'

export default function Scoreboard() {
  const { teamA, teamB, currentTeam, isStealMode } = useGameStore()
  const { isDark } = useThemeStore()

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`w-full flex items-center justify-between p-4 rounded-xl ${
        isDark ? 'bg-dark-card' : 'bg-white shadow-lg'
      }`}
    >
      {/* Team A */}
      <div className={`flex-1 text-center transition-all duration-300 ${
        currentTeam === 'A' && !isStealMode ? 'scale-105' : 'opacity-70'
      }`}>
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="w-3 h-3 rounded-full bg-teamA" />
          <span className="font-bold text-teamA truncate max-w-[100px]">{teamA.name}</span>
        </div>
        <motion.div
          key={teamA.score}
          initial={{ scale: 1.3 }}
          animate={{ scale: 1 }}
          className="text-4xl font-mono font-bold score-number"
        >
          {teamA.score}
        </motion.div>
        {/* Power-ups remaining */}
        <div className="flex justify-center gap-1 mt-2 text-lg">
          {!teamA.powerUps.pit.used && <span title="الحفرة">🕳️</span>}
          {!teamA.powerUps.callFriend.used && <span title="اتصال بصديق">📞</span>}
          {!teamA.powerUps.doubleAnswer.used && <span title="جاوب جوابين">✌️</span>}
          {!teamA.powerUps.rest.used && <span title="استريح">😴</span>}
        </div>
      </div>

      {/* VS / Steal indicator */}
      <div className="px-4">
        {isStealMode ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="px-3 py-1 bg-accent-500 text-black rounded-full font-bold text-sm"
          >
            سرقة!
          </motion.div>
        ) : (
          <span className={`text-2xl font-bold ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
            VS
          </span>
        )}
      </div>

      {/* Team B */}
      <div className={`flex-1 text-center transition-all duration-300 ${
        currentTeam === 'B' && !isStealMode ? 'scale-105' : currentTeam === 'B' && isStealMode ? 'scale-105' : 'opacity-70'
      }`}>
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="w-3 h-3 rounded-full bg-teamB" />
          <span className="font-bold text-teamB truncate max-w-[100px]">{teamB.name}</span>
        </div>
        <motion.div
          key={teamB.score}
          initial={{ scale: 1.3 }}
          animate={{ scale: 1 }}
          className="text-4xl font-mono font-bold score-number"
        >
          {teamB.score}
        </motion.div>
        {/* Power-ups remaining */}
        <div className="flex justify-center gap-1 mt-2 text-lg">
          {!teamB.powerUps.pit.used && <span title="الحفرة">🕳️</span>}
          {!teamB.powerUps.callFriend.used && <span title="اتصال بصديق">📞</span>}
          {!teamB.powerUps.doubleAnswer.used && <span title="جاوب جوابين">✌️</span>}
          {!teamB.powerUps.rest.used && <span title="استريح">😴</span>}
        </div>
      </div>
    </motion.div>
  )
}
