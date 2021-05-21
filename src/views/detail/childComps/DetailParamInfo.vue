<template>
	<div v-if="Object.keys(paramInfo).length !== 0" class="params-wrap">
		<table v-for="(item, index) in paramInfo.rule" class="table">
			<tr v-for="(list, index) in item" class="flex">
				<td v-for="(listitem, index) in list" class="rule-list-item">
					{{listitem}}
				</td>
			</tr>
		</table>
		<div v-for="(info, index) in paramInfo.info" :key="index" class="flex info-list-wrap">
			<div class="info-list-tit">{{info.key}}</div>
			<div>{{info.value}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'DetailParamInfo',
		props: {
			paramInfo: {
				type: Object,
				default() {
					return {}
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.params-wrap {
		border-top: 4px solid #ececec;
    border-bottom: 4px solid #ececec;
  }
  .flex {
    display: flex;
    width: 100vw;
  }
	.rule-list-item {
    flex: 1;
    text-align: center;
    justify-content: space-evenly;
		font-size: 12px;
		width: 20%;
		border-bottom: 1px solid #ececec;
		padding: 10px 4px;
	}
	.info-list-wrap {
    margin-left: 5vw;
		font-size: 14px;;
		border-bottom: 1px solid #ececec;
		padding: 10px 4px;
		line-height: 20px;
		.info-list-tit {
			width: 18%;
		}
	}
</style>
