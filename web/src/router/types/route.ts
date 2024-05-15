import type { Component } from 'vue'

export interface Route {
  type: string
  route: string
  subtitle?: string
  component?: Component
}
