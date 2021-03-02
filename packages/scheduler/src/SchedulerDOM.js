import { IdlePriority, ImmediatePriority, LowPriority, NormalPriority, UserBlockingPriority } from "./SchedulerPriorities";

// 0b111111111111111111111111111111
const MAX_SIGNED_INT = 1073741823;
// 开始调度就超时
const IMMEDIATE_PRIORITY_TIMEOUT = -1;
// 一段时间后超时
const USER_BLOCKING_PRIORITY_TIMEOUT = 250;
const NORMAL_PRIORITY_TIMEOUT = 5000;
const LOW_PRIORITY_TIMEOUT = 10000;
// 永不超时
const IDLE_PRIORITY_TIMEOUT = MAX_SIGNED_INT;

let getCurrentTime;
if (typeof performance === "object" && performance.now) {
  getCurrentTime = () => performance.now();
} else {
  const initialTime = Date.now();
  getCurrentTime = () => Date.now() - initialTime;
}

export function scheduleCallback(priority, callback, options) {
  const currentTime = getCurrentTime();

  // 计算开始调度时间
  let startTime;
  if (typeof options === "object" && options !== null) {

  } else {
    startTime = currentTime;
  }

  // 计算超时时间
  let timeout;
  switch(priority) {
    case ImmediatePriority: {
      timeout = IMMEDIATE_PRIORITY_TIMEOUT;
      break;
    }
    case UserBlockingPriority: {
      timeout = USER_BLOCKING_PRIORITY_TIMEOUT;
      break;
    }
    case LowPriority: {
      timeout = LOW_PRIORITY_TIMEOUT;
      break;
    }
    case IdlePriority: {
      timeout = IDLE_PRIORITY_TIMEOUT;
      break;
    }
    case NormalPriority:
    default: {
      timeout = NORMAL_PRIORITY_TIMEOUT;
      break;
    }
  }

  const expirationTime = startTime + timeout;
}